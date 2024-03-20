'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

const Carousel = dynamic(() => import('@/three/Carousel').then((mod) => mod.Carousel), {})

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5">
        <Canvas>
            <Suspense fallback={null}>
              <Carousel />
            </Suspense>
          </Canvas>
      </div>
    </>
  )
}
