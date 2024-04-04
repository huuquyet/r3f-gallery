import { getPiramidalIndex, lerp } from '@/utils'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useMemo, useRef, useState } from 'react'
import { usePrevious } from 'react-use'
import { useTextureList } from '../dom/TextureProvider'
import { CarouselItem } from './CarouselItem'
import { PostProcessing } from './PostProcessing'

/*------------------------------
Plane Settings
------------------------------*/
const planeSettings = {
  width: 1,
  height: 2.5,
  gap: 0.1,
}

/*------------------------------
Gsap Defaults
------------------------------*/
gsap.defaults({
  duration: 2.5,
  ease: 'power3.out',
})

/*------------------------------
Carousel
------------------------------*/
export default function Carousel() {
  const [$root, setRoot] = useState()
  const $post = useRef()

  const [activePlane, setActivePlane] = useState(null)
  const prevActivePlane = usePrevious(activePlane)
  const { viewport } = useThree()
  const { textures } = useTextureList()

  /*--------------------
  Vars
  --------------------*/
  const progress = useRef(0)
  const startX = useRef(0)
  const isDown = useRef(false)
  const speedWheel = 0.02
  const speedDrag = -0.3
  const oldProgress = useRef(0)
  const speed = useRef(0)
  const $items = useMemo(() => {
    if ($root) return $root.children
  }, [$root])

  /*--------------------
  Diaplay Items
  --------------------*/
  const displayItems = (item: any, index: number, active: number) => {
    const piramidalIndex = getPiramidalIndex($items, active)[index]
    gsap.to(item.position, {
      x: (index - active) * (planeSettings.width + planeSettings.gap),
      y: $items.length * -0.1 + piramidalIndex * 0.1,
    })
  }

  /*--------------------
  RAF
  --------------------*/
  useFrame(() => {
    progress.current = Math.max(0, Math.min(progress.current, 100))

    const active = Math.floor((progress.current / 100) * ($items.length - 1))
    $items.forEach((item: any, index: number) => displayItems(item, index, active))
    speed.current = lerp(speed.current, Math.abs(oldProgress.current - progress.current), 0.1)

    oldProgress.current = lerp(oldProgress.current, progress.current, 0.1)

    if ($post.current) {
      $post.current.thickness = speed.current
    }
  })

  /*--------------------
  Handle Wheel
  --------------------*/
  const handleWheel = (e: any) => {
    if (activePlane !== null) return
    const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX)
    const wheelProgress = isVerticalScroll ? e.deltaY : e.deltaX
    progress.current = progress.current + wheelProgress * speedWheel
  }

  /*--------------------
  Handle Down
  --------------------*/
  const handleDown = (e: any) => {
    if (activePlane !== null) return
    isDown.current = true
    startX.current = e.clientX || e.touches?.[0].clientX || 0
  }

  /*--------------------
  Handle Up
  --------------------*/
  const handleUp = () => {
    isDown.current = false
  }

  /*--------------------
  Handle Move
  --------------------*/
  const handleMove = (e: any) => {
    if (activePlane !== null || !isDown.current) return
    const x = e.clientX || e.touches?.[0].clientX || 0
    const mouseProgress = (x - startX.current) * speedDrag
    progress.current = progress.current + mouseProgress
    startX.current = x
  }

  /*--------------------
  Click
  --------------------*/
  useEffect(() => {
    if (!$items) return
    if (activePlane !== null && prevActivePlane === null) {
      progress.current = (activePlane / ($items.length - 1)) * 100 // Calculate the progress.current based on activePlane
    }
  }, [activePlane, $items])

  /*--------------------
  Render Plane Events
  --------------------*/
  const renderPlaneEvents = () => {
    return (
      <mesh
        position={[0, 0, -0.01]}
        onWheel={handleWheel}
        onPointerDown={handleDown}
        onPointerUp={handleUp}
        onPointerMove={handleMove}
        onPointerLeave={handleUp}
        onPointerCancel={handleUp}
      >
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    )
  }

  /*--------------------
  Render Slider
  --------------------*/
  const renderSlider = () => {
    return (
      <group ref={setRoot}>
        {textures.map((texture, i) => (
          <CarouselItem
            width={planeSettings.width}
            height={planeSettings.height}
            setActivePlane={setActivePlane}
            activePlane={activePlane}
            key={texture.id}
            texture={texture}
            index={i}
          />
        ))}
      </group>
    )
  }

  return (
    <group>
      {renderPlaneEvents()}
      {renderSlider()}
      <PostProcessing ref={$post} />
    </group>
  )
}
