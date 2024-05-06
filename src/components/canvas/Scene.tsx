'use client'

import { Preload } from '@react-three/drei'
import { Canvas, addEffect } from '@react-three/fiber'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { AgXToneMapping } from 'three'
import tunnel from 'tunnel-rat'

export default function Scene({ ...props }) {
  const r3f = tunnel()
  // Use lenis to control scrolling
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, syncTouch: true })
    const removeEffect = addEffect((time: number) => lenis.raf(time))
    return () => {
      lenis.destroy()
      removeEffect()
    }
  }, [])

  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} gl={{ toneMapping: AgXToneMapping, powerPreference: 'default' }}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}
