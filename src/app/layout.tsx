import Layout from '@/providers/Layout'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './global.css'
import Header from './header'

const APP_NAME = 'R3F Gallery'
const APP_DEFAULT_TITLE = 'Awesome Gallery using Next.js + React Three Fiber'
const APP_TITLE_TEMPLATE = '%s - Awesome Gallery'
const APP_DESCRIPTION = 'Awesome Gallery using Next.js + React Three Fiber'
const APP_URL = 'https://r3f-gallery-huuquyet.vercel.app/'
const TWITTER = '@HuuQuyetNg'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  metadataBase: new URL('https://${process.env.VERCEL_URL}'),
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: ['/icon/share.png'],
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    site: TWITTER,
  },
  keywords: ['Next.js', 'React Three Fiber', 'Three.js', 'Gallery'],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  )
}
