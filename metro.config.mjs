import { withTamagui } from '@tamagui/metro-plugin'
// Learn more https://docs.expo.io/guides/customizing-metro
/** @type {import('expo/metro-config').MetroConfig} */
import { getDefaultConfig } from 'expo/metro-config'

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})

config.resolver.sourceExts.push('mjs')

// Enable Tamagui and add nice web support with optimizing compiler + CSS extraction
export default withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
})
