import Koa from 'koa'
import { router } from './router.js'

export const bootstrap = () => {
  const app = new Koa()
  app.use(router.routes())
  app.on('error', err => {
    console.log(err)
  })

  return app
}
