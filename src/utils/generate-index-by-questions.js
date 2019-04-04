const inquirer = require('inquirer')
const template = require('lodash/template')
const fs = require('fs')
const path = require('path')
const { defaultLng, allLngs } = require('../translation/meta')
const messages = require('./form-messages')

const locale = process.argv[2] || defaultLng
if (!messages[locale]) {
  console.log(`No language - ${locale}`)
  process.exit()
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'articleId',
      message: messages[locale].articleId,
      validate(input) {
        return new Promise((resolve, reject) => {
          if (typeof input !== 'string') return resolve(messages[locale].articleIdNotString)
          const matchArr = input.match(/[A-Z][a-zA-Z0-9]+/)
          if (!matchArr) return resolve(messages[locale].articleIdCamelCaseRule)
          if (matchArr[0] !== input) return resolve(messages[locale].articleIdCamelCaseRule)
          if (!fs.existsSync(path.resolve(`./src/articles/files/${input}`))) return resolve(messages[locale].articleIdNotFound)
          return resolve(true)
        })
      }
    }
  ])
  .then(answers => {
    const dirPath = path.resolve(`./src/articles/files/${answers.articleId}`)
    const indexPath = path.resolve(`${dirPath}/index.js`)
    const files = fs.readdirSync(dirPath).filter(file => file.indexOf('.md') >= 0)
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'defaultFile',
          message: messages[locale].defaultFile,
          choices: files
        }
      ])
      .then(answers2 => {
        if (fs.existsSync(indexPath)) fs.unlinkSync(indexPath)
        const templatePath = path.resolve('./src/utils/index.template')
        const templateString = fs.readFileSync(templatePath, 'utf8')
        const filenames = files.map(file => file.replace('.md', ''))
        const pairs = allLngs
          .map(lng => ([lng, lng.replace('-', '')]))
          .filter(pair => filenames.find(name => name === pair[1]))
          .map(pair => ({ key: pair[0], value: pair[1] }))
        const info = { files:filenames , defaultFile: answers2.defaultFile.replace('.md', ''), pairs }
        fs.writeFileSync(indexPath, template(templateString)(info))
      })
  })
