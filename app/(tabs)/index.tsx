import { Link } from 'expo-router'
import { Button, Text } from 'tamagui'

export default function TabOneScreen() {
  return (
    <Link href="/modal" asChild>
      <Button flex={1} alignItems="center">
        <Text fontSize={20}>Hello!</Text>
      </Button>
    </Link>
  )
}
