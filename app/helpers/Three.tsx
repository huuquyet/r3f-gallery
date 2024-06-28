import type { PropsWithChildren } from 'react'
import tunnel from 'tunnel-rat'

export const r3f = tunnel()

export function Three({ children }: PropsWithChildren) {
  return <r3f.In>{children}</r3f.In>
}
