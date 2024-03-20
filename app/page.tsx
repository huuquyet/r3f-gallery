'use client'

import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CardsDemo = dynamic(() => import('@/three/CardsDemo').then((mod) => mod.CardsDemo), {})

export default function Page() {
  return (
    <>
      <div>
        <Canvas>
          <Suspense fallback={null}>
            <CardsDemo />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}
