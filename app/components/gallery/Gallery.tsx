import { ScrollControls, useScroll } from '@react-three/drei'
import { type Vector3, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef, useState } from 'react'
import type { Group } from 'three'
import { ActiveCard } from './ActiveCard'
import { Cards } from './Cards'

export default function Gallery() {
  return (
    <ScrollControls pages={4} infinite>
      <Scene position={[0, 1.5, 0]} />
    </ScrollControls>
  )
}

function Scene({ position, ...props }: { position: Vector3 }) {
  const ref = useRef<Group>(null!)
  const scroll = useScroll()
  const [hovered, hover] = useState(null)
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
    /* @ts-ignore */
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
      />
      <Cards
        category="SUMMER"
        from={Math.PI / 4}
        len={Math.PI / 2}
        position={[0, 0.4, 0]}
        onPointerOver={hover}
        onPointerOut={hover}
      />
      <Cards
        category="AUTUMN"
        from={Math.PI / 4 + Math.PI / 2}
        len={Math.PI / 2}
        onPointerOver={hover}
        onPointerOut={hover}
      />
      <Cards
        category="WINTER"
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
