import Router from '@koa/router'
import { UsersModule } from './users/users.module.js'
import EventEmitter2 from 'eventemitter2'
import { registerModules } from './app/utils/register-modules.js'
import { CarsModule } from './cars/cars.module.js'

export const router = new Router()

const events = new EventEmitter2()
const database = {
  insert (data) {
    console.log('data inserted in db.')
  }
}

const modules = [UsersModule({ database, events }), CarsModule({ database, events })]

registerModules(router, modules)
