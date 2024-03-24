'use client'

import Header from '@/header'
import Loading from '@/loading'
import { Canvas } from '@react-three/fiber'
import { type ReactNode, Suspense, useRef } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null!)

  return (
    <div ref={ref} className="wrapper">
      <Canvas>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Canvas>
    </div>
  )
}
