'use client'

import Loading from '@/loading'
import { Canvas } from '@react-three/fiber'
import { type ReactNode, Suspense, useRef } from 'react'
import TextureProvider from './TextureProvider'

export default function Layout({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLCanvasElement>(null!)

  return (
    <Canvas ref={ref} className="wrapper">
      <Suspense fallback={<Loading />}>
        <TextureProvider>{children}</TextureProvider>
      </Suspense>
    </Canvas>
  )
}
