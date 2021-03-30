const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n,
    async rewrites() {
      return [
        {
          source: '/researcher/account',
          destination: '/researcher/account/wall',
        },
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