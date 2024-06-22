'use client'

import { Item, Minimap } from '@/components/horizontal'
import { useTextureList } from '@/providers/TextureProvider'
import { Scroll, ScrollControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Horizontal({ w = 0.7, gap = 0.15 }: { w?: number; gap?: number }) {
  const { textures } = useTextureList()
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap

  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + textures.length * xW) / width}>
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
