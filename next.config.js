/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thewalkdeal.com'
      },
      {
        protocol: 'https',
        hostname: 'nobero.com'
      },
      {
        protocol: 'https',
        hostname: 'somethingsbrewing.in'
      },
      {
        protocol: 'https',
        hostname: 'redwolf.in'
      }
    ]
  }
}

module.exports = nextConfig
