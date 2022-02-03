import { UsersModule } from './users/users.module.js'
import { registerModules } from './app/utils/register-modules.js'
import { CarsModule } from './cars/cars.module.js'

export const Router = ({ database, events }) => {
  const router = new Router()
  const modules = [
    UsersModule({ database, events }),
    CarsModule({ database, events })
  ]
  registerModules(router, modules)
  return router
}
