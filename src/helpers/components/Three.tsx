'use client'

import { r3f } from '@/helpers/global'
import type { ReactNode } from 'react'

export const Three = ({ children }: { children: ReactNode }) => {
  return <r3f.In>{children}</r3f.In>
}
