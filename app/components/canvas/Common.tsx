import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

export default function Common({ color }: { color?: string }) {
  return (
    <Suspense fallback={null}>
      {color && <color attach="background" args={[color]} />}
      {/* <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={2} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color="magenta" decay={0.2} /> */}
      <PerspectiveCamera makeDefault fov={69} position={[0, 0, 5]} />
    </Suspense>
  )
}
