if (!self.define) {
  let e,
    i = {}
  const a = (a, s) => (
    (a = new URL(a + '.js', s).href),
    i[a] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = i), document.head.appendChild(e)
        } else (e = a), importScripts(a), i()
      }).then(() => {
        const e = i[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (s, c) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (i[n]) return
    const r = {}
    const g = (e) => a(e, n),
      d = { module: { uri: n }, exports: r, require: g }
    i[n] = Promise.all(s.map((e) => d[e] || g(e))).then((e) => (c(...e), r))
  }
}
define(['./workbox-c06b064f'], (e) => {
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/cPuXyuXiMMd9WmPaZmcHb/_buildManifest.js',
          revision: 'e0a21c7d7f93d89dce16df0231dc76f2',
        },
        {
          url: '/_next/static/cPuXyuXiMMd9WmPaZmcHb/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/0f8af13e.4b9c890826e8272e.js', revision: '4b9c890826e8272e' },
        { url: '/_next/static/chunks/150-2988bcf9e16c2a44.js', revision: 'cPuXyuXiMMd9WmPaZmcHb' },
        { url: '/_next/static/chunks/152.81654da24b7fb831.js', revision: '81654da24b7fb831' },
        { url: '/_next/static/chunks/258.b6bcb627b8a819dd.js', revision: 'b6bcb627b8a819dd' },
        { url: '/_next/static/chunks/468-222c28107ff58815.js', revision: 'cPuXyuXiMMd9WmPaZmcHb' },
        { url: '/_next/static/chunks/631-62ae4893f16e6b7b.js', revision: 'cPuXyuXiMMd9WmPaZmcHb' },
        { url: '/_next/static/chunks/642.737e7bf359bfcfdb.js', revision: '737e7bf359bfcfdb' },
        { url: '/_next/static/chunks/71-8d2345c96a8818a1.js', revision: 'cPuXyuXiMMd9WmPaZmcHb' },
        { url: '/_next/static/chunks/742.e32adc0770503279.js', revision: 'e32adc0770503279' },
        { url: '/_next/static/chunks/753.039eabbdfd5ab42d.js', revision: '039eabbdfd5ab42d' },
        { url: '/_next/static/chunks/755.080f26e7580d3134.js', revision: '080f26e7580d3134' },
        { url: '/_next/static/chunks/855.989199ba3f89ecc3.js', revision: '989199ba3f89ecc3' },
        { url: '/_next/static/chunks/861.5036c3908b8d8cba.js', revision: '5036c3908b8d8cba' },
        { url: '/_next/static/chunks/90.2b6d718e54b75829.js', revision: '2b6d718e54b75829' },
        {
          url: '/_next/static/chunks/app/_not-found-bfbb80c7e6723178.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/app/blob/page-4a6a4ecbd8329d47.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/app/carousel/page-81d3643560e76404.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/app/horizontal/page-ea84b126437c4ddb.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/app/layout-81d3b6101e225e7d.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/app/page-b50c61d32d2c9db6.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/b536a0f1-e0eb41ff62fdb1c9.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        { url: '/_next/static/chunks/c15bf2b0.40a621fed3307a59.js', revision: '40a621fed3307a59' },
        {
          url: '/_next/static/chunks/fd9d1056-8afb9c6be371ce9c.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/framework-ecc7c29b98f29b59.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/main-app-4a4025b1012f0eb5.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        { url: '/_next/static/chunks/main-fd754e4f7f364ebe.js', revision: 'cPuXyuXiMMd9WmPaZmcHb' },
        {
          url: '/_next/static/chunks/pages/_app-75f6107b0260711c.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-927ac2ae36c6e0b0.js',
          revision: 'cPuXyuXiMMd9WmPaZmcHb',
        },
        { url: '/_next/static/css/761ec3eac10274c2.css', revision: '761ec3eac10274c2' },
        { url: '/icons/android-icon-192x192.png', revision: '9f29f1d7c8f6da2d2e64bce1d3136d3f' },
        { url: '/icons/android-icon-512x512.png', revision: '9f29f1d7c8f6da2d2e64bce1d3136d3f' },
        { url: '/icons/apple-touch-icon.png', revision: '538a91302401ac461adfe1b509181921' },
        { url: '/icons/favicon-16x16.png', revision: '5998cde017dee1b68827ac575ce6a300' },
        { url: '/icons/favicon-32x32.png', revision: '2a82680a8c270c3ad4b8341f5ef897f8' },
        { url: '/icons/favicon.ico', revision: '4106c96e0a55d35b1b13fa4281a907b7' },
        { url: '/icons/safari-pinned-tab.svg', revision: '5876746bbc008fdab40fd1abf568ca6b' },
        { url: '/icons/share.png', revision: 'f04a8d2b41543ef4669c07e6d04e2d94' },
        { url: '/images/img1.jpg', revision: 'bf5352e97962d5ceff87e857f79fc5a5' },
        { url: '/images/img10.jpg', revision: '2882cc94f2019f0790cd34e832084255' },
        { url: '/images/img11.jpg', revision: '00b1bfc7622b5cff629a01d34af1ea56' },
        { url: '/images/img12.jpg', revision: 'f71049230c016f8d4ad6aa0dc9778191' },
        { url: '/images/img13.jpg', revision: 'cf02827f46bef64f185a960ecf1f23e3' },
        { url: '/images/img14.jpg', revision: '37ed4c392d0836930634f46d6e54a5e7' },
        { url: '/images/img15.jpg', revision: '62eb3243d98b1f4c53d109730ecf7a2e' },
        { url: '/images/img16.jpg', revision: '533da12b1a7a9cb1c25960fe782bf7f9' },
        { url: '/images/img17.jpg', revision: '259a8f29d39fc940e448689c6f6bf85d' },
        { url: '/images/img18.jpg', revision: '7a8f493d2cfbfad0aa25914465a872f2' },
        { url: '/images/img19.jpg', revision: '6afac5b653fab4aacf785b2fa4889cee' },
        { url: '/images/img2.jpg', revision: 'cd51e31e74ebf022123679ab2ab0111c' },
        { url: '/images/img20.jpg', revision: '1f6e147ac81316bc3abf702a396c42e7' },
        { url: '/images/img21.jpg', revision: 'b9c43df5e130cf356ed8b04b75d906cc' },
        { url: '/images/img22.jpg', revision: '806295f19dafa560c48acfa38bd1569c' },
        { url: '/images/img23.jpg', revision: 'cf25ab5ad33981cd0301b72d85f3b4f6' },
        { url: '/images/img24.jpg', revision: 'f088d38f5bbf8694c87f630ae55650be' },
        { url: '/images/img25.jpg', revision: '8f8c35fa163fa4bb7342875013461d54' },
        { url: '/images/img26.jpg', revision: '7a513d540c2059dda5db226941a819e5' },
        { url: '/images/img27.jpg', revision: '947bb96cffa721b1326628a05c36aff0' },
        { url: '/images/img28.jpg', revision: 'fe96bf5023bebc8a2d296a5009e762b7' },
        { url: '/images/img29.jpg', revision: '23e5dfb736a067809da8b5ec3ebc6a89' },
        { url: '/images/img3.jpg', revision: '5d6d5383a40b41cff5bb68586921e910' },
        { url: '/images/img30.jpg', revision: '76c25ad1dbe3e35f2e52fbd182427abe' },
        { url: '/images/img31.jpg', revision: '2d11bc57b5980e9205d6616507fbe21e' },
        { url: '/images/img32.jpg', revision: '6a88262ce88c52cc77f8db73105f4a40' },
        { url: '/images/img33.jpg', revision: '59fb49e9096a4bf13751e1cdeb430156' },
        { url: '/images/img34.jpg', revision: '6b1f8587b5914b75983bfcd12625ceda' },
        { url: '/images/img35.jpg', revision: 'de8a3018b383075dcc6163a1f63e7480' },
        { url: '/images/img36.jpg', revision: 'caaa5c8c88388e9613140c14541a27a6' },
        { url: '/images/img37.jpg', revision: 'fd338ede101cca4226df6dfd1e398250' },
        { url: '/images/img38.jpg', revision: '5092cc4cbea16ec35c7a537e23ac2d40' },
        { url: '/images/img39.jpg', revision: '7947bd31a4c563833a562535191fa634' },
        { url: '/images/img4.jpg', revision: '59c4c3d66952803bfa4154e0fbb3dd02' },
        { url: '/images/img40.jpg', revision: '1d5e09c0c0ad0ea17b8b516a9322f333' },
        { url: '/images/img41.jpg', revision: '975f054d53083a89d9cdf1ec99e1a1a1' },
        { url: '/images/img42.jpg', revision: 'c83c0ab5aa2687d60083650152b7186a' },
        { url: '/images/img43.jpg', revision: '3dc7763512ef6b64dad8bcd1395d5e51' },
        { url: '/images/img44.jpg', revision: '2e6a2fd580f0cdf7b4ca2286f237ac6c' },
        { url: '/images/img45.jpg', revision: '8f448a8970dd50e23133c78d7487af2b' },
        { url: '/images/img46.jpg', revision: '48eed19a3e4e5f952b50b7ec40104ca9' },
        { url: '/images/img47.jpg', revision: '59427a31191ef5057e5cd7b56a570c1f' },
        { url: '/images/img48.jpg', revision: '3cbe0f445beb58c34cc01fe5fcbc12fa' },
        { url: '/images/img49.jpg', revision: 'ba051443a26a3b56ac5402d8d9bfe956' },
        { url: '/images/img5.jpg', revision: '1d33cb054fd7ff4b90740aaa0c2e12af' },
        { url: '/images/img50.jpg', revision: '2cbccf862705e7fea816c0914a88c5aa' },
        { url: '/images/img51.jpg', revision: 'a21337f5606a51758ae82257e54bb1f1' },
        { url: '/images/img52.jpg', revision: '389e9ba1ca870d0d3dc145b6aac40e91' },
        { url: '/images/img53.jpg', revision: '7191e6ffdb71dea1e134f899dffe1c65' },
        { url: '/images/img54.jpg', revision: '4dcd79de19b80edb86993ae1d7ede972' },
        { url: '/images/img55.jpg', revision: '35e5751ac2accd501f15719bafca6185' },
        { url: '/images/img56.jpg', revision: '734bbcce075f0dbbf323dadff1812ae2' },
        { url: '/images/img6.jpg', revision: 'af983c2aa501cafb73154685494614bb' },
        { url: '/images/img7.jpg', revision: '0f790bde2b89b609d4d6d7e032865387' },
        { url: '/images/img8.jpg', revision: 'faa7802d59e2e44b450c392c9547bbf5' },
        { url: '/images/img9.jpg', revision: '0ce37adebcc0b5a1bba8a66f35013eaf' },
        { url: '/images/logo.svg', revision: 'dc863d0fcb5d547297cea8efaa42f483' },
        { url: '/images/scores/lighthouse.md', revision: 'b340672042e44d785f94b912a8fb31d6' },
        { url: '/images/scores/lighthouse.svg', revision: '354748450a08b0d6a92b2ceec631cb59' },
        { url: '/imgList.ts', revision: '75f5f1d7d77368c318990941016cce5b' },
        { url: '/manifest.json', revision: '47b5f74a2e002aafe7e713d10deee731' },
        { url: '/robots.txt', revision: 'd41d8cd98f00b204e9800998ecf8427e' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, { status: 200, statusText: 'OK', headers: e.headers })
                : e,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: i } }) =>
        !(!e || i.startsWith('/api/auth/callback') || !i.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: i }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        a &&
        !i.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: i }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') && a && !i.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: i }) => i && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    )
})