import { Image, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef, useState } from 'react'
import {
  BufferGeometry,
  Color,
  type Group,
  LineBasicMaterial,
  type Mesh,
  type Texture,
  Vector3,
} from 'three'
import { proxy, useSnapshot } from 'valtio'
import { useTextureList } from '../dom/TextureProvider'

const material = new LineBasicMaterial({ color: 'white' })
const geometry = new BufferGeometry().setFromPoints([
  new Vector3(0, -0.5, 0),
  new Vector3(0, 0.5, 0),
])
const state = proxy({
  clicked: null,
})

function Minimap() {
  const ref = useRef<Group>(null!)
  const scroll = useScroll()
  const { viewport } = useThree()
  const { textures } = useTextureList()

  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(index / textures.length - 1.5 / textures.length, 4 / textures.length)
      easing.damp(child.scale, 'y', 0.15 + y / 6, 0.15, delta)
    })
  })
  return (
    <group ref={ref}>
      {textures.map((texture, i) => (
        <line
          key={texture.id}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - textures.length * 0.03, -viewport.height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  )
}

function Item({
  index,
  position,
  scale,
  c = new Color(),
  ...props
}: { index: number; position: any; scale: any; c?: Color; texture: Texture; length: number }) {
  const ref = useRef<Mesh>(null!)
  const scroll = useScroll()
  const { clicked } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const click = () => {
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
    ref.current.material.scale[0] = ref.current.scale.x
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

export default function Horizontal({ w = 0.7, gap = 0.15 }: { w: number; gap: number }) {
  const { textures } = useTextureList()
  const { viewport } = useThree()
  const xW = w + gap
  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(viewport.width - xW + textures.length * xW) / viewport.width}
    >
      <Minimap />
      <Scroll>
        {textures.map((texture, i) => (
          <Item
            key={texture.id}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4, 1]}
            texture={texture}
            length={textures.length}
          />
        ))}
      </Scroll>
    </ScrollControls>
  )
}
