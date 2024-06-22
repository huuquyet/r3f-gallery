'use client'

import { Three } from '@/helpers/Three'
import TextureProvider from '@/providers/TextureProvider'
import { OrbitControls } from '@react-three/drei'
import { type ReactNode, forwardRef, useImperativeHandle, useRef } from 'react'

const View = forwardRef(
  ({ children, orbit, ...props }: { children?: ReactNode; orbit?: boolean }, ref: any) => {
    const localRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <TextureProvider>{children}</TextureProvider>
          {orbit && <OrbitControls />}
        </Three>
      </>
    )
  }
)
View.displayName = 'View'

export default View
