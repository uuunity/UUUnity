const withLess = require('@zeit/next-less')
const path = require('path')
const merge = require('lodash/merge')

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]",
  },
  webpack: (config) => {
    const newConfig = merge({}, config, {
      resolve: {
        alias: {
          styles: path.resolve(__dirname, 'styles/'),
          components: path.resolve(__dirname, 'components/'),
          articles: path.resolve(__dirname, 'articles/'),
          hooks: path.resolve(__dirname, 'hooks/'),
          i18n: path.resolve(__dirname, 'i18n.js')
        }
      }
    })
    return newConfig
  }
})
