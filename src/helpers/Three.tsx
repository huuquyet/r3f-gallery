'use client'

import type { ReactNode } from 'react'
import tunnel from 'tunnel-rat'

export const r3f = tunnel()

export function Three({ children }: { children: ReactNode }) {
  return <r3f.In>{children}</r3f.In>
}
