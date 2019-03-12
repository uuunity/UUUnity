const NextI18Next = require('next-i18next/dist/commonjs')

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'zh-TW',
  otherLanguages: ['en', 'zh-CN'],
  lng: 'zh-TW',
  fallbackLng: 'zh-TW',
  localePath: 'src/static/locales',
  localeSubpaths: 'foreign'
})

module.exports = NextI18NextInstance
