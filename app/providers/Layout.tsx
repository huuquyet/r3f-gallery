import Scene from '@/components/canvas/Scene'
import { type PropsWithChildren, useRef } from 'react'
import { StyleSheet } from 'react-native'
import { YStack } from 'tamagui'

export default function Layout({ children, ...props }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <YStack ref={ref} {...props} style={styles.wrapper}>
      {children}
      <Scene style={styles.scene} eventSource={ref} eventPrefix="client" />
    </YStack>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  scene: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'auto',
    overflow: 'hidden',
  },
})
