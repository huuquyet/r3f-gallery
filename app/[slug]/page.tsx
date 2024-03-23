'use client'

import Header from '@/header'
import Loading from '@/loading'
import imgList from '@/utils/imgList'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

export default function Page() {
  const params = useParams()
  const Component = dynamic(() => import(`@/components/${params.slug}`), {})

  const urls = Object.entries(imgList).map(([_, url]) => url)

  return (
    <>
      <Header titlePre={params.slug as string} />
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={<Loading />}>
          <Component urls={urls} />
        </Suspense>
      </Canvas>
    </>
  )
}
