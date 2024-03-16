import { Tabs } from 'expo-router'
import { useAtom } from 'jotai'
import { Button, Text } from 'tamagui'
import { themeWithToggle } from '../atoms/theme'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
          headerRight: () => <ThemeButton />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
          headerRight: () => <ThemeButton />,
        }}
      />
    </Tabs>
  )
}

const ThemeButton = () => {
  const themeAtom = themeWithToggle('dark')
  const [theme, toggle] = useAtom(themeAtom)

  return (
    <Button onPress={() => toggle()}>
      <Text>{theme}</Text>
    </Button>
  )
}
