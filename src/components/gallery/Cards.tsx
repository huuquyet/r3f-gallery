'use client'

import { useTextureList } from '@/providers/TextureProvider'
import { Billboard, Text } from '@react-three/drei'
import type { Vector3 } from '@react-three/fiber'
import { useState } from 'react'
import type { Texture } from 'three'
import { Card } from './Card'

export function Cards({
  category,
  from = 0,
  len = Math.PI * 2,
  radius = 5.25,
  onPointerOver,
  onPointerOut,
  position,
  ...props
}: {
  category: string
  from: number
  len?: number
  radius?: number
  onPointerOver: any
  onPointerOut: any
  position?: Vector3
}) {
  const { textures } = useTextureList()
  const [hovered, hover] = useState(null)
  const amount = Math.round(len * 26)
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
        <Text fontSize={0.5} anchorX="center" color="#e9e9e9" fontWeight={600}>
          {category}
        </Text>
      </Billboard>
      {Array.from({ length: amount - 3 /* minus 3 images at the end, creates a gap */ }, (_, i) => {
        const angle = from + (i / amount) * len
        const texture = textures.at(Math.floor(i % textures.length)) as Texture

        return (
          <Card
            key={angle}
            onPointerOver={(e: any) => {
              e.stopPropagation()
              hover(i as any)
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
            texture={texture}
          />
        )
      })}
    </group>
  )
}
