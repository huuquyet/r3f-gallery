'use client'

import { Three } from '@/helpers/components/Three'
import Loading from '@/loading'
import TextureProvider from '@/providers/TextureProvider'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { type ReactNode, Suspense, forwardRef, useImperativeHandle, useRef } from 'react'

export const Common = ({ color }: { color?: string }) => (
  <Suspense fallback={<Loading />}>
    {color && <color attach="background" args={[color]} />}
    {/* <ambientLight /> */}
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />
    <PerspectiveCamera makeDefault fov={69} position={[0, 0, 5]} />
  </Suspense>
)

const View = forwardRef(
  ({ children, orbit, ...props }: { children: ReactNode; orbit?: boolean }, ref) => {
    const localRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
            <TextureProvider>
              {children}
              {orbit && <OrbitControls />}
            </TextureProvider>
        </Three>
      </>
    )
  }
)
View.displayName = 'View'

export { View }
