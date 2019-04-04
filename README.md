# UUUnity

#### TODO list in this README
- project description
- grammar check

## What we use
- package manager - yarn
- SSR framework - next
- the style library - less

## How to develop the website

1. Clone the repo.

`$ git clone https://github.com/uuunity/UUUnity.git`

2. Go to the project.

`$ cd UUUnity`

3. Install dependancies.

`$ yarn install`

4. Test the website.

`$ yarn test`

4. Develop with development mode.

`$ yarn dev`

## How to add a article in the website

1. Clone the repo.

`$ git clone https://github.com/uuunity/UUUnity.git`

2. Go to the article folder.

`cd UUUnity/src/articles/file`

3. Create a folder for your article. Please name your folder follow the rule, and the folder also is your article id.

`$ mkdir <YourArticleId>`

4. Go to the folder you created.

`$ cd <YourArticleId>`

5. Write some infomation about the new article.

`$ yarn gen:article [language]`

language: You can write your prefer language, and system will show asks with that language. ex: `en`, `zh-TW`, `zh-CN` The default language is `zh-TW`.

ex: `yarn gen:article en`

By the way, the language of article must be the language you choose.

6. The script will ask you some question and product a new file. Wrtie some words in the file and save it.

7. Create a `index.js` in the folder. Answer the question the script asks.

`$ yarn gen:index [language]`

language: You can write your prefer language, and system will show asks with that language. ex: `en`, `zh-TW`, `zh-CN` The default language is `zh-TW`.

ex: `yarn gen:index en`

### TODO list
- to write the program to auto generating sitemap.xml
- to add GA tag
- to design theme and logo
- to add "About us" article
- to add searching article function

## Contributer
