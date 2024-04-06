import { useTextureList } from '@/providers/TextureProvider'
import { Billboard, Image, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useLayoutEffect, useRef } from 'react'
import type { Mesh } from 'three'

export const ActiveCard = ({ hovered, ...props }: { hovered: any }) => {
  const { textures } = useTextureList()
  const ref = useRef<Mesh>(null!)
  /* @ts-ignore */
  const name = useMemo(() => generate({ exactly: 2 }).join(' '), [hovered])
  useLayoutEffect(() => {
    /* @ts-ignore */
    ref.current.material.zoom = 0.8
  }, [hovered])
  useFrame((state, delta) => {
    easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
    /* @ts-ignore */
    easing.damp(ref.current.material, 'opacity', hovered !== null, 0.3, delta)
  })
  const texture = textures.at(Math.floor(hovered % textures.length))!

  return (
    <Billboard {...props}>
      <Text fontSize={0.5} position={[2.15, 3.85, 0]} anchorX="left" color="#e9e9e9">
        {hovered !== null && `${name}\n${hovered}`}
      </Text>
      <Image ref={ref} transparent position={[0, 1.5, 0]} texture={texture}>
        {/* @ts-ignore */}
        <roundedPlaneGeometry
          parameters={{ width: 3.5, height: 1.618 * 3.5 }}
          args={[3.5, 1.618 * 3.5, 0.2]}
        />
      </Image>
    </Billboard>
  )
}
