const NextI18Next = require('next-i18next/dist/commonjs')

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'zh-TW',
  otherLanguages: ['en'],
  lng: 'zh-TW',
  fallbackLng: 'zh-TW',
  localePath: 'src/static/locales'
})

module.exports = NextI18NextInstance
