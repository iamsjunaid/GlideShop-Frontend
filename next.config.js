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
        hostname: 'www.redwolf.in'
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com'
      }
    ]
  }
}

module.exports = nextConfig
