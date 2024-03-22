'use client'

import Header from '@/header'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Cards = dynamic(() => import('@/three/Cards'), {})

export default function Page() {
  return (
    <>
      <Header titlePre="3D" />
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Cards />
        </Suspense>
      </Canvas>
    </>
  )
}
