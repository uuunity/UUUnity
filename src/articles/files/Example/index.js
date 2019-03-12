import createLocaleIndex from 'utils/create-locale-index'
import * as en from './en.md'
import * as zhTW from './zhTW.md'

export default createLocaleIndex(en, { 'zh-TW': zhTW }, { 'zh-CN': zhTW })
