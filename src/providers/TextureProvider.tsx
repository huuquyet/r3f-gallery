'use client'

import { useTexture } from '@react-three/drei'
import { Fragment, type ReactNode, createContext, useContext, useEffect, useState } from 'react'
import type { Texture } from 'three'

interface TextureContextType {
  textures: Texture[]
  setTextures: (textures: Texture[]) => void
}

const TextureContext = createContext<TextureContextType | null>(null)

export default function TextureProvider({ children, ...props }: { children?: ReactNode }) {
  const value = useContext(TextureContext)
  // if (value) {
  //   return <Fragment {...props}>{children}</Fragment>
  // }

  const [textures, setTextures] = useState<Texture[]>([])
  const urls: string[] = []
  for (let i = 1; i <= 56; i++) {
    urls.push(`./images/img${i}.jpg`)
  }
  const textureList: Texture[] = useTexture(urls.reverse())
  useEffect(() => {
    setTextures(textureList)
  }, [])

  return (
    <TextureContext.Provider {...props} value={{ textures, setTextures }}>
      {children}
    </TextureContext.Provider>
  )
}

export const useTextureList = () => useContext(TextureContext) as TextureContextType
