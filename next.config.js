const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n,
    async rewrites() {
      return [
        {
          source: '/researcher/account',
          destination: '/researcher/account/wall',
        },
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*` // Proxy to Backend
        },
        {
          source: '/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*` // Proxy to Backend
        }
      ]
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true,
        },
      ]
    },
  }