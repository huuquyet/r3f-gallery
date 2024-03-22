'use client'

import Header from '@/header'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  const name = capitalize(params.slug)
  const Component = dynamic(() => import(`@/three/${name}`), {})

  return (
    <>
      <Header titlePre={name} />
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      </Canvas>
    </>
  )
}

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
