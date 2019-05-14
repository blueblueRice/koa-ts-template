import Koa from 'koa'
const app = new Koa()
import views from 'koa-views'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from 'koa2-cors'

const onerror = require('koa-onerror')

// cors
app.use(cors())

import Index from './controller/index'

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'html'
}))

// logger
app.use(async (ctx: any, next: any) => {
  const start = Number(new Date())
  await next()
  const ms = Number(new Date()) - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(Index.routes()).use(Index.allowedMethods())

// error-handling
app.on('error', (err: any, ctx: any) => {
  console.error('server error', err, ctx)
});

export default app
