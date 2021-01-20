module.exports = {
    async rewrites() {
      return [
        {
          source: '/researcher/account',
          destination: '/researcher/account/wall',
        },
      ]
    },
  }