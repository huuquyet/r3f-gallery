import { Canvas } from '@react-three/fiber/native'
import { Carousel } from '../three/Carousel'

export default function TabOneScreen() {
  return (
    <Canvas dpr={[1, 1.5]}>
      <Carousel />
    </Canvas>
  )
}
