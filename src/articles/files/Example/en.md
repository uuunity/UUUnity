import tags from 'articles/tags'

export const meta = {
  id: 'Example',
  title: 'Example article',
  description: 'The example article for uuunity',
  tags: [tags.Example, tags.Others],
  from: 'https://uuunity-website.herokuapp.com/',
  locale: 'en',
  authors: [{
    name: 'ballfish',
    website: 'http://ballfish.io'
  }],
  createdTime: new Date('2018/3/11'),
  updatedTime: new Date('2018/3/11')
}


# The example article for uuunity

## Do you know that you could use javascript to write unity script?

### Head3

#### Head4

##### Head5

###### Head6

[This is a link](#)

|Head1|Head2|
|:---:|:---:|
|body1|body2|

Hello uuunity.

**word**
*word*
~~word~~

---

There is our logo below.

![logo](/static/article-images/Example/Logo.png)

> This is quote

> more...

- list1
- list2
- list3

1. list1
2. list2
3. list3

```js=2
const foo = 1
const bar = 2

asset(foo + bar, 3)
```
