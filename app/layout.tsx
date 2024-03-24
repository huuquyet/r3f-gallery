import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import type { Metadata, Viewport } from 'next'
import Head from 'next/head'
import type { ReactNode } from 'react'

const APP_NAME = 'R3F Gallery'
const APP_DEFAULT_TITLE = 'Awesome Gallery using Next.js + React Three Fiber'
const APP_TITLE_TEMPLATE = '%s - Awesome Gallery'
const APP_DESCRIPTION = 'Awesome Gallery using Next.js + React Three Fiber'
const APP_URL = 'https://r3f-gallery-huuquyet.vercel.app/'
const AUTHOR = 'Quyet'
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
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={AUTHOR} />

        <title>{APP_DEFAULT_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="keywords" content="Next.js,React Three Fiber,Three.js" />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />

        <meta property="og:title" content={APP_DEFAULT_TITLE} />
        <meta property="og:type" content="site" />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:image" content={'/icons/share.png'} />
        <meta property="og:site_name" content={APP_DEFAULT_TITLE} />
        <meta property="og:description" content={APP_DESCRIPTION} />

        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" color="#000000" href="/icons/safari-pinned-tab.svg" />
        <link rel="apple-touch-startup-image" href="/startup.png" />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1.0" />
        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/icons/apple-touch-icon.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={TWITTER} />
      </Head>
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
