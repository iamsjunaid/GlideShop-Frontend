/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thewalkdeal.com'
      }
    ]
  }
}

module.exports = nextConfig
