import Router from '@koa/router'
import koaBody from 'koa-body'

const router = new Router({ prefix: '/cars' })

export const CarsRouter = ({ service }) => {
  router.get('/', async (ctx) => {
    const cars = await service.findAllCars({})
    ctx.body = { message: 'inserted', data: cars }
  })

  router.post('/', koaBody(), async (ctx) => {
    const { body } = ctx.request
    await service.createCar(body)
    ctx.body = { message: 'Successful insert.', data: {} }
  })

  return router
}
