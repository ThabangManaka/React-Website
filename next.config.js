/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
   
},
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'd2vcaowhp5v7jq.cloudfront.net',
      port: '',
      pathname: '/**',
    }
  ],
},
   }

module.exports = nextConfig



