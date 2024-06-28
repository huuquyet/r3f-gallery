import { themeAtom } from '@/Provider'
import { Heading1, Heading2, Heading3, Monitor, Moon, Sun } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import { useAtom } from 'jotai'
import { Button, XStack, useTheme } from 'tamagui'

const icons = {
  dark: <Moon />,
  light: <Sun />,
  system: <Monitor />,
}

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Carousel',
          tabBarIcon: ({ color }) => <Heading1 color={color} />,
          headerRight: () => <ThemeButton />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Horizontal',
          tabBarIcon: ({ color }) => <Heading2 color={color} />,
          headerRight: () => <ThemeButton />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color }) => <Heading3 color={color} />,
          headerRight: () => <ThemeButton />,
        }}
      />
    </Tabs>
  )
}

const ThemeButton = () => {
  const [theme, toggle] = useAtom(themeAtom)

  return (
    <XStack mr="$4" gap="$2">
      <Button icon={icons[theme]} onPress={() => toggle()} circular />
    </XStack>
  )
}
