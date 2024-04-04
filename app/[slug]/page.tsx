'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  const Component = dynamic(() => import(`@/components/${params.slug}`), {})

  return <Component />
}
