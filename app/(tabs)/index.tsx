import { ScrollControls, useScroll } from '@react-three/drei'
import { Billboard, Image, Text } from '@react-three/drei/native'
import { Canvas, extend, useFrame } from '@react-three/fiber/native'
import { Asset } from 'expo-asset'
import { THREE } from 'expo-three'
import { easing, geometry } from 'maath'
import { generate } from 'random-words'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import images from '../../assets/images'

extend(geometry)

export default function TabOneScreen() {
  return (
    <Canvas dpr={[1, 1.5]}>
      <ScrollControls pages={4} infinite>
        <Scene position={[0, 1.5, 0]} />
      </ScrollControls>
    </Canvas>
  )
}

function Scene({ children, ...props }) {
  const ref = useRef<THREE.Group>()
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
        category="spring"
        from={0}
        len={Math.PI / 4}
        onPointerOver={hover}
        onPointerOut={hover}
      />
      <Cards
        category="summer"
        from={Math.PI / 4}
        len={Math.PI / 2}
        position={[0, 0.4, 0]}
        onPointerOver={hover}
        onPointerOut={hover}
      />
      <Cards
        category="autumn"
        from={Math.PI / 4 + Math.PI / 2}
        len={Math.PI / 2}
        onPointerOver={hover}
        onPointerOut={hover}
      />
      <Cards
        category="winter"
        from={Math.PI * 1.25}
        len={Math.PI * 2 - Math.PI * 1.25}
        position={[0, -0.4, 0]}
        onPointerOver={hover}
        onPointerOut={hover}
      />
      <ActiveCard hovered={hovered} />
    </group>
  )
}

function Cards({
  category,
  data,
  from = 0,
  len = Math.PI * 2,
  radius = 5.25,
  onPointerOver,
  onPointerOut,
  ...props
}) {
  const [hovered, hover] = useState(null)
  const amount = Math.round(len * 22)
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
        <Text fontSize={0.25} anchorX="center" color="black">
          {category}
        </Text>
      </Billboard>
      {Array.from(
        { length: amount - 3 /* minus 3 images at the end, creates a gap */ },
        (_, i) => {
          const angle = from + (i / amount) * len
          const imgIndex = `img${Math.floor(i % 56) + 1}`
          const asset = Asset.fromModule(images[imgIndex])
          asset.downloadAsync()

          return (
            <Card
              key={angle}
              onPointerOver={(e) => (e.stopPropagation(), hover(i), onPointerOver(i))}
              onPointerOut={() => (hover(null), onPointerOut(null))}
              position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
              rotation={[0, Math.PI / 2 + angle, 0]}
              active={hovered !== null}
              hovered={hovered === i}
              url={asset.localUri}
            />
          )
        }
      )}
    </group>
  )
}

function Card({ url, active, hovered, ...props }) {
  const ref = useRef()
  useFrame((state, delta) => {
    const f = hovered ? 1.4 : active ? 1.25 : 1
    easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta)
    easing.damp3(ref.current.scale, [1.618 * f, 1 * f, 1], 0.15, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} url={url} scale={[1.618, 1, 1]} side={THREE.DoubleSide} />
    </group>
  )
}

async function ActiveCard({ hovered, ...props }) {
  const ref = useRef()
  const name = useMemo(() => generate({ exactly: 2 }).join(' '), [hovered])
  useLayoutEffect(() => void (ref.current.material.zoom = 0.8), [hovered])
  useFrame((state, delta) => {
    easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
    easing.damp(ref.current.material, 'opacity', hovered !== null, 0.3, delta)
  })
  const imgIndex = `img${Math.floor(hovered % 56) + 1}`
  const asset = Asset.fromModule(images[imgIndex])
  await asset.downloadAsync()

  return (
    <Billboard {...props}>
      <Text fontSize={0.5} position={[2.15, 3.85, 0]} anchorX="left" color="black">
        {hovered !== null && `${name}\n${hovered}`}
      </Text>
      <Image ref={ref} transparent position={[0, 1.5, 0]} url={asset.localUri}>
        <roundedPlaneGeometry
          parameters={{ width: 3.5, height: 1.618 * 3.5 }}
          args={[3.5, 1.618 * 3.5, 0.2]}
        />
      </Image>
    </Billboard>
  )
}
