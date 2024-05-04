'use client'

import { MeshTransmissionMaterial } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { forwardRef, useImperativeHandle, useRef } from 'react'

export const PostProcessing = forwardRef((_, ref) => {
  const { width, height } = useThree((state) => state.viewport)
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  const { active, ior } = useControls({
    active: {
      value: true,
    },
    ior: {
      value: 0.9,
      min: 0.8,
      max: 1.2,
    },
  })

  return active ? (
    <mesh position={[0, 0, 1]}>
      <planeGeometry args={[width, height]} />
      <MeshTransmissionMaterial
        ref={localRef}
        transmission={0.7}
        roughness={0}
        thickness={0}
        chromaticAberration={0.06}
        anisotropy={0}
        ior={ior}
      />
    </mesh>
  ) : null
})
