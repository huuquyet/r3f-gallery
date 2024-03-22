'use client'

import Header from '@/header'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Horizontal = dynamic(() => import('@/three/Horizontal').then((mod) => mod.Horizontal), {})

export default function Page() {
  return (
    <>
      <Header titlePre="Horizontal" />
      <Suspense fallback={null}>
        <Horizontal />
      </Suspense>
    </>
  )
}
