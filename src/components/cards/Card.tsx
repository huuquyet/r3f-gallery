import { Image } from '@react-three/drei'
import { type Euler, type Vector3, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'
import { DoubleSide, type Mesh, type Texture } from 'three'

export const Card = ({
  texture,
  active,
  hovered,
  ...props
}: {
  texture: Texture
  active: boolean
  hovered: any
  position: Vector3
  rotation: Euler
  onPointerOver: any
  onPointerOut: any
}) => {
  const ref = useRef<Mesh>(null!)
  useFrame((state, delta) => {
    const f = hovered ? 1.4 : active ? 1.25 : 1
    easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta)
    easing.damp3(ref.current.scale, [1.618 * f, 1 * f, 1], 0.15, delta)
  })

  return (
    <group {...props}>
      {/* @ts-ignore */}
      <Image ref={ref} texture={texture} scale={[1.618, 1, 1]} side={DoubleSide} />
    </group>
  )
}
