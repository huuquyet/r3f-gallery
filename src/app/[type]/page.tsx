'use client'

import Loading from '@/app/loading'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

const View = dynamic(() => import('@/components/canvas/View'), { ssr: false, loading: Loading })
const Common = dynamic(() => import('@/components/canvas/Common'), { ssr: false })

export default function Page() {
  const params = useParams()
  const Component = dynamic(() => import(`@/components/${params.type}`), { ssr: false })

  return (
    <View>
      <Suspense fallback={<Loading />}>
        <Component />
        {params.type !== 'gallery' ? <Common /> : null}
      </Suspense>
    </View>
  )
}
