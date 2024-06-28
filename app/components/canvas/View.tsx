import { Three } from '@/helpers/Three'
import TextureProvider from '@/providers/TextureProvider'
import { type PropsWithChildren, forwardRef, useImperativeHandle, useRef } from 'react'

const View = forwardRef(({ children, ...props }: PropsWithChildren, ref: any) => {
  const localRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <TextureProvider>{children}</TextureProvider>
      </Three>
    </>
  )
})
View.displayName = 'View'

export default View
