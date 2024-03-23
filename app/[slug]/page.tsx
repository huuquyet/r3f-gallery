'use client'

import Header from '@/header'
import imgList from '@/utils/imgList'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

export default function Page() {
  const params = useParams()
  const Component = dynamic(() => import(`@/components/${params.slug}`), {})

  const title = capitalize(params.slug as string)
  const urls = Object.entries(imgList).map(([_, url]) => url)

  return (
    <>
      <Header titlePre={title} />
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Component urls={urls} />
        </Suspense>
      </Canvas>
    </>
  )
}

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
