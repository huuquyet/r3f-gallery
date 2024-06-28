module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{ico,json,md,svg}'],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
}
