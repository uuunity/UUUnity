const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')
const I18n = require('./translation/i18n')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express()
    .use(nextI18NextMiddleware(I18n))
    .use(handler)
    .listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})
