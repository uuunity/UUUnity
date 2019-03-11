const withLess = require('@zeit/next-less')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)$/
})
const path = require('path')
const merge = require('lodash/merge')

module.exports = withMDX(withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]",
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config) => {
    const newConfig = merge({}, config, {
      resolve: {
        alias: {
          styles: path.resolve(__dirname, 'styles/'),
          components: path.resolve(__dirname, 'components/'),
          articles: path.resolve(__dirname, 'articles/'),
          translation: path.resolve(__dirname, 'translation/')
        }
      }
    })
    return newConfig
  }
}))
