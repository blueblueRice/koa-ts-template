import Router from 'koa-router'
import { Controller, Request } from 'bluebluerice-ts-koa-router'

@Controller({ prefix: '/api' })
export default class Index extends Router {
  static routes: any
  static allowedMethods: any

  @Request({ url: '/', method: 'get' })
  async hello(ctx: any, next: any) {
    ctx.body = 'hello world'
    next()
  }
}
