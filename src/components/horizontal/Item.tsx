import { Image, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef, useState } from 'react'
import { Color, type Mesh, type Texture } from 'three'
import { proxy, useSnapshot } from 'valtio'

const state = proxy({
  clicked: null,
})

export const Item = ({
  index,
  position,
  scale,
  c = new Color(),
  ...props
}: { index: number; position: any; scale: any; c?: Color; texture: Texture; length: number }) => {
  const ref = useRef<Mesh>(null!)
  const scroll = useScroll()
  const { clicked } = useSnapshot(state)
  const [hovered, hover] = useState(false)

  const click = () => {
    /* @ts-ignore */
    state.clicked = index === clicked ? null : index
  }
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(index / props.length - 1.5 / props.length, 4 / props.length)
    easing.damp3(
      ref.current.scale,
      [clicked === index ? 4.7 : scale[0], clicked === index ? 5 : 4 + y, 1],
      0.15,
      delta
    )
    /* @ts-ignore */
    ref.current.material.scale[0] = ref.current.scale.x
    /* @ts-ignore */
    ref.current.material.scale[1] = ref.current.scale.y
    if (clicked !== null && index < clicked)
      easing.damp(ref.current.position, 'x', position[0] - 2, 0.15, delta)
    if (clicked !== null && index > clicked)
      easing.damp(ref.current.position, 'x', position[0] + 2, 0.15, delta)
    if (clicked === null || clicked === index)
      easing.damp(ref.current.position, 'x', position[0], 0.15, delta)
    easing.damp(
      ref.current.material,
      'grayscale',
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      0.15,
      delta
    )
    easing.dampC(
      /* @ts-ignore */
      ref.current.material.color,
      hovered || clicked === index ? 'white' : '#aaa',
      hovered ? 0.3 : 0.15,
      delta
    )
  })

  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={() => {}}
      onPointerOver={over}
      onPointerOut={out}
    />
  )
}
