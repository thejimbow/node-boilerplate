import Router from '@koa/router'

const router = new Router({ prefix: '/cars' })

export const CarsRouter = ({ service }) => {
  router.get('/', ctx => {
    service.createCar({ model: 'BMW' })
    ctx.body = { message: 'inserted' }
  })

  return router
}