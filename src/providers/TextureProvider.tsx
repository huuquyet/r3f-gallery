'use client'

import imgList from '@/utils/imgList'
import { useTexture } from '@react-three/drei'
import { type ReactNode, createContext, useContext, useEffect, useState } from 'react'
import type { Texture } from 'three'

interface TextureContextType {
  textures: Texture[]
  setTextures: (textures: Texture[]) => void
}

const TextureContext = createContext<TextureContextType | null>(null)

export default function TextureProvider({ children }: { children: ReactNode }) {
  const [textures, setTextures] = useState<Texture[]>([])
  const urls = Object.entries(imgList).map(([_, url]) => url)
  const textureList: Texture[] = useTexture(urls.reverse())
  useEffect(() => {
    setTextures(textureList)
  }, [])

  return (
    <TextureContext.Provider value={{ textures, setTextures }}>{children}</TextureContext.Provider>
  )
}

export const useTextureList = () => useContext(TextureContext) as TextureContextType
