'use client'

import TextureProvider from '@/providers/TextureProvider'
import { View as ViewImpl } from '@react-three/drei'
import type { ReactNode } from 'react'

export default function View({ children, ...props }: { children?: ReactNode }) {
  return (
    <ViewImpl {...props}>
      <TextureProvider>{children}</TextureProvider>
    </ViewImpl>
  )
}
