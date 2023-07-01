/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  publicPath: '/demos/zettelkablooey/build/',
  assetsBuildDirectory: 'public/demos/zettelkablooey/build',
  ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
  postcss: true,
  serverModuleFormat: 'cjs',
  tailwind: true,
}
