'use client'

import Header from '@/header'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Header titlePre="Horizontal" />
      <Canvas>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    </>
  )
}
