'use client'

import Header from '@/header'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CardsDemo = dynamic(() => import('@/three/CardsDemo').then((mod) => mod.CardsDemo), {})

export default function Page() {
  return (
    <>
      <Header titlePre="3D" />
      <Canvas>
        <Suspense fallback={null}>
          <CardsDemo />
        </Suspense>
      </Canvas>
    </>
  )
}
