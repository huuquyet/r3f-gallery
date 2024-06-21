'use client'

import { r3f } from '@/helpers/Three'
import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AgXToneMapping } from 'three'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} gl={{ toneMapping: AgXToneMapping, powerPreference: 'default' }}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}
