import { UsersModule } from './users/users.module.js'
import { registerModules } from './app/utils/register-modules.js'
import { CarsModule } from './cars/cars.module.js'
import Router from '@koa/router'

export const AppRouter = ({ database, events }) => {
  const router = new Router()
  const modules = [
    UsersModule({ database, events }),
    CarsModule({ database, events })
  ]
  registerModules(router, modules)
  return router
}
