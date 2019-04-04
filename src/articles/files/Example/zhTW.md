import tags from 'articles/tags'

export const meta = {
  id: 'Example',
  title: '範例文章',
  description: '這是一個用來當作 UUUnity 的範例文章',
  tags: [tags.Example, tags.Others],
  from: 'https://uuunity-website.herokuapp.com/',
  locale: 'zh-TW',
  authors: [{
    name: '球魚',
    website: 'http://ballfish.io'
  }],
  createdTime: new Date('2018/3/12'),
  updatedTime: new Date('2018/3/12')
}


# 這是一個用來當作 UUUnity 的範例文章

## 你知道 Unity 的 script 曾經可以用 JavaScript 來寫嗎？

### 標題3

#### 標題4

##### 標題5

###### 標題6

[這是一個連結](#)

|標題1|標題2|
|:---:|:---:|
|內容1|內容2|

嗨 uuunity.

**粗體字**
*斜體字*
~~刪除線~~

---

下面是我們的 Logo

![logo](/static/article-images/Example/Logo.png)

> 這是一段引言

> 更多...

- 清單1
- 清單2
- 清單3

1. 清單1
2. 清單2
3. 清單3

```js=2
const foo = 1
const bar = 2

asset(foo + bar, 3)
```
