import MDXImage from 'components/MDXImage'
import moment from 'moment'
import tags from 'articles/tags'

export const meta = {
  id: 'Example',
  title: '範例文章',
  description: '這是一個用來當作 UUUnity 的範例文章',
  tags: [tags.example, tags.others],
  from: 'https://uuunity-website.herokuapp.com/',
  locale: 'zh-TW',
  authors: [{
    name: 'ballfish',
    website: 'http://ballfish.io'
  }],
  createdTime: new Date('2018/3/12'),
  updatedTime: new Date('2018/3/12')
}


# 這是一個用來當作 UUUnity 的範例文章

## 你知道 Unity 的 script 曾經可以用 JavaScript 來寫嗎？

嗨 uuunity.

下面是我們的 Logo

<MDXImage folderName="Example" fileName="Logo.png" alt="logo" />
