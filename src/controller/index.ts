import Router from 'koa-router'
import Service from '../service/index'
import { Controller, Request } from 'bluebluerice-ts-koa-router'
const service = new Service()

@Controller({ prefix: '/api' })
export default class Index extends Router {
  static routes: any
  static allowedMethods: any
  constructor(){
    super()
  }

  @Request({ url: '/', method: 'get' })
  async hello(ctx: any, next: any) {
    service.sayHello(ctx)
    next()
  }
}
