/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds, not dev mode
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/myPage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/myPage' : '',
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig

