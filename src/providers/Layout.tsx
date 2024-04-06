'use client'

import dynamic from 'next/dynamic'
import { type ReactNode, useRef } from 'react'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

export default function Layout({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className="wrapper">
      {children}
      <Scene className="other" eventSource={ref} eventPrefix="client" />
    </div>
  )
}
