/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'source.unsplash.com',
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    // Disable ESLint during builds since we're handling it separately
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds even with TypeScript errors
    ignoreBuildErrors: true,
  },
  // Enable static export for Vercel
  outputFileTracing: true,
  // Disable React's StrictMode for now to prevent double rendering in development
  reactStrictMode: false,
}

module.exports = nextConfig
