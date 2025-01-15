const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  experimental: {
    appDir: true,
  },
})

module.exports = withNextra()
