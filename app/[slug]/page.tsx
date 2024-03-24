'use client'

import imgList from '@/utils/imgList'
import { useTexture } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import type { Texture } from 'three'

export default function Page() {
  const params = useParams()
  const Component = dynamic(() => import(`@/components/${params.slug}`), {})

  const urls = Object.entries(imgList).map(([_, url]) => url)
  const textures: Texture[] = useTexture(urls.reverse())

  return (
    <>
      <Component textures={textures} />
    </>
  )
}
