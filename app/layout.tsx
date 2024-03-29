import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

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
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
