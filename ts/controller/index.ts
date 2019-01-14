import Router from 'koa-router'
import Service from '../service/index'
import decorators from 'bluebluerice-ts-koa-router'
const { Controller, Request } = decorators
const service = new Service()

@Controller({ prefix: '/api/' })
export default class Index extends Router {
  @Request({ url: '/', method: 'get' })
  async hello(ctx: any, next: any) {
    service.sayHello(ctx)
    next()
  }
}
