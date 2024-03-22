'use client'

import Header from '@/header'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Carousel = dynamic(() => import('@/three/Carousel').then((mod) => mod.Carousel), {})

export default function Page() {
  return (
    <>
      <Header titlePre="Carousel" />
      <Canvas>
        <Suspense fallback={null}>
          <Carousel />
        </Suspense>
      </Canvas>
    </>
  )
}
