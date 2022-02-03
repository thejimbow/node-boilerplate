import Router from '@koa/router'
import koaBody from 'koa-body'
import { authMiddleware } from '../auth/auth.middleware.js'

const router = new Router({ prefix: '/users' })

export const UsersRouter = ({ usersService, service }) => {
  router.use(authMiddleware)

  router.get('/', ctx => {
    service.addUsersCall(ctx.url)
    ctx.body = { cool: ctx.cool, message: 'salam', age: 20 }
  })

  router.post('/', koaBody(), ctx => {
    ctx.body = { salam: '22' }
  })

  return router
}
