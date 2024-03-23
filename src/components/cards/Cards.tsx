import { Billboard, Image, ScrollControls, Text, useScroll } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { easing, geometry } from 'maath'
import { generate } from 'random-words'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { DoubleSide, type Group, type Mesh } from 'three'

extend(geometry)

export default function CardsDemo({ urls }: { urls: string[] }) {
  return (
    <ScrollControls pages={4} infinite>
      <Scene position={[0, 1.5, 0]} urls={urls} />
    </ScrollControls>
  )
}

function Scene({ position, ...props }: { position: any; urls: string[] }) {
  const ref = useRef<Group>(null!)
  const scroll = useScroll()
  const [hovered, hover] = useState(null)
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
    state.events.update() // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9],
      0.3,
      delta
    )
    state.camera.lookAt(0, 0, 0)
  })
  return (
    <group ref={ref} {...props}>
      <Cards
        category="SPRING"
        from={0}
        len={Math.PI / 4}
        onPointerOver={hover}
        onPointerOut={hover}
        {...props}
      />
      <Cards
        category="SUMMER"
        from={Math.PI / 4}
        len={Math.PI / 2}
        position={[0, 0.4, 0]}
        onPointerOver={hover}
        onPointerOut={hover}
        {...props}
      />
      <Cards
        category="AUTUMN"
        from={Math.PI / 4 + Math.PI / 2}
        len={Math.PI / 2}
        onPointerOver={hover}
        onPointerOut={hover}
        {...props}
      />
      <Cards
        category="WINTER"
        from={Math.PI * 1.25}
        len={Math.PI * 2 - Math.PI * 1.25}
        position={[0, -0.4, 0]}
        onPointerOver={hover}
        onPointerOut={hover}
        {...props}
      />
      <ActiveCard hovered={hovered} {...props} />
    </group>
  )
}

function Cards({
  category,
  from = 0,
  len = Math.PI * 2,
  radius = 5.25,
  onPointerOver,
  onPointerOut,
  ...props
}: {
  category: string
  from: number
  len: number
  onPointerOver: any
  onPointerOut: any
  position?: any
  urls: string[]
}) {
  const [hovered, hover] = useState(null)
  const amount = Math.round(len * 33)
  const textPosition = from + (amount / 2 / amount) * len
  return (
    <group {...props}>
      <Billboard
        position={[
          Math.sin(textPosition) * radius * 1.4,
          0.5,
          Math.cos(textPosition) * radius * 1.4,
        ]}
      >
        <Text fontSize={0.25} anchorX="center" color="#e9e9e9" fontWeight={600}>
          {category}
        </Text>
      </Billboard>
      {Array.from({ length: amount - 3 /* minus 3 images at the end, creates a gap */ }, (_, i) => {
        const angle = from + (i / amount) * len
        return (
          <Card
            key={angle}
            onPointerOver={(e: any) => {
              e.stopPropagation()
              hover(i)
              onPointerOver(i)
            }}
            onPointerOut={() => {
              hover(null)
              onPointerOut(null)
            }}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            rotation={[0, Math.PI / 2 + angle, 0]}
            active={hovered !== null}
            hovered={hovered === i}
            url={props.urls.at(Math.floor(i % 56)) as string}
          />
        )
      })}
    </group>
  )
}

function Card({
  url,
  active,
  hovered,
  ...props
}: {
  url: string
  active: boolean
  hovered: any
  position: any
  rotation: any
  onPointerOver: any
  onPointerOut: any
}) {
  const ref = useRef<Mesh>(null!)
  useFrame((state, delta) => {
    const f = hovered ? 1.4 : active ? 1.25 : 1
    easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta)
    easing.damp3(ref.current.scale, [1.618 * f, 1 * f, 1], 0.15, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} url={url} scale={[1.618, 1, 1]} side={DoubleSide} />
    </group>
  )
}

function ActiveCard({ hovered, ...props }: { hovered: any; urls: string[] }) {
  const ref = useRef<Mesh>(null!)
  const name = useMemo(() => generate({ exactly: 2 }).join(' '), [hovered])
  useLayoutEffect(() => {
    ref.current.material.zoom = 0.8
  }, [hovered])
  useFrame((state, delta) => {
    easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
    easing.damp(ref.current.material, 'opacity', hovered !== null, 0.3, delta)
  })
  return (
    <Billboard {...props}>
      <Text fontSize={0.5} position={[2.15, 3.85, 0]} anchorX="left" color="#e9e9e9">
        {hovered !== null && `${name}\n${hovered}`}
      </Text>
      <Image
        ref={ref}
        transparent
        position={[0, 1.5, 0]}
        url={props.urls.at(Math.floor(hovered % 56)) as string}
      >
        <roundedPlaneGeometry
          parameters={{ width: 3.5, height: 1.618 * 3.5 }}
          args={[3.5, 1.618 * 3.5, 0.2]}
        />
      </Image>
    </Billboard>
  )
}
