
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://usa.velmondo.com',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
