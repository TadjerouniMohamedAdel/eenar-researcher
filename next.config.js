module.exports = {
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