'use client'

import TextureProvider from '@/providers/TextureProvider'
import { OrbitControls } from '@react-three/drei'
import { type ReactNode, forwardRef, useImperativeHandle, useRef } from 'react'
import tunnel from 'tunnel-rat'

const View = forwardRef(
  ({ children, orbit, ...props }: { children?: ReactNode; orbit: boolean }, ref: any) => {
    const r3f = tunnel()
    const localRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => localRef.current)
    return (
      <>
        <div ref={localRef} {...props} />
        <r3f.In>
          <TextureProvider>{children}</TextureProvider>
          {orbit && <OrbitControls />}
        </r3f.In>
      </>
    )
  }
)
View.displayName = View

export default View
