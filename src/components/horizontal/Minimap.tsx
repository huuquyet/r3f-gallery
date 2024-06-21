'use client'

import { useTextureList } from '@/providers/TextureProvider'
import { Line, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'
import type { Group } from 'three'

export function Minimap() {
  const ref = useRef<Group>(null!)
  const scroll = useScroll()
  const { height } = useThree((state) => state.viewport)
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
        <Line
          key={texture.id}
          color={'white'}
          points={[
            [0, -0.5, 0],
            [0, 0.5, 0],
          ]}
          position={[i * 0.06 - textures.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  )
}
