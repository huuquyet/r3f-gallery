import Loading from '@/app/loading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const View = dynamic(() => import('@/components/canvas/View'), { ssr: false, loading: Loading })
const Common = dynamic(() => import('@/components/canvas/Common'), { ssr: false })

export function generateStaticParams() {
  return [{ type: 'cards' }, { type: 'carousel' }, { type: 'horizontal' }]
}

export default function Page({ params }: { params: { type: string } }) {
  const { type } = params
  const Component = dynamic(() => import(`@/components/${type}`), { ssr: false })

  return (
    <View orbit>
      <Suspense fallback={null}>
        <Component />
        {type !== 'cards' ? <Common /> : null}
      </Suspense>
    </View>
  )
}
