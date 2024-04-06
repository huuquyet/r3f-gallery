'use client'

import Loading from '@/loading'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

export default function Page() {
  const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => <Loading />,
  })
  const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), {
    ssr: false,
  })

  const params = useParams()
  const Component = dynamic(() => import(`@/components/${params.slug}`), { ssr: false })

  return (
    <View>
      <Suspense fallback={<Loading />}>
        <Component />
        {params.slug !== 'cards' ? <Common /> : null}
      </Suspense>
    </View>
  )
}
