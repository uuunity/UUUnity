const inquirer = require('inquirer')
const datepicker = require('inquirer-datepicker-prompt')
const template = require('lodash/template')
const moment = require('moment')
const fs = require('fs')
const path = require('path')
const tags = require('../articles/tags')
const { defaultLng } = require('../translation/meta')
const messages = require('./form-messages')

const locale = process.argv[2] || defaultLng
if (!messages[locale]) {
  console.log(`No language - ${locale}`)
  process.exit()
}

inquirer.registerPrompt('datetime', datepicker)

inquirer
  .prompt([
    { type: 'input',
      name: 'articleId',
      message: messages[locale].articleId,
      validate(input) {
        return new Promise((resolve, reject) => {
          if (typeof input !== 'string') return resolve(messages[locale].articleIdNotString)
          const matchArr = input.match(/[A-Z][a-zA-Z0-9]+/)
          if (!matchArr) return resolve(messages[locale].articleIdCamelCaseRule)
          if (matchArr[0] !== input) return resolve(messages[locale].articleIdCamelCaseRule)
          return resolve(true)
        })
      }
    },
    {
      type: 'input',
      name: 'title',
      message: messages[locale].title,
      default: messages[locale].titleDefault
    },
    {
      type: 'input',
      name: 'description',
      message: messages[locale].description
    },
    {
      type: 'checkbox',
      name: 'tags',
      message: messages[locale].tags,
      choices: Object.keys(tags).map(key => ({ name: tags[key][locale], value: key }))
    },
    {
      type: 'input',
      name: 'from',
      message: messages[locale].from
    },
    {
      type: 'input',
      name: 'authorName',
      message: messages[locale].authorName
    },
    {
      type: 'input',
      name: 'authorWebsite',
      message: messages[locale].authorWebsite
    },
    {
      type: 'datetime',
      name: 'createdTime',
      message: messages[locale].createdTime,
      format: ['yyyy', '/', 'm', '/', 'd']
    },
    {
      type: 'datetime',
      name: 'updatedTime',
      message: messages[locale].updatedTime,
      format: ['yyyy', '/', 'm', '/', 'd']
    }
  ])
  .then(answers => {
    const info = Object.assign({}, answers, { createdTime: moment(answers.createdTime).format('YYYY/MM/DD'), updatedTime: moment(answers.updatedTime).format('YYYY/MM/DD'), language: locale })
    const templatePath = path.resolve('./src/utils/template')
    const templateString = fs.readFileSync(templatePath, 'utf8')
    fs.writeFileSync(`./src/articles/files/${answers.articleId}/${locale.replace('-', '')}.md`, template(templateString)(info))
  })
