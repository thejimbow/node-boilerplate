import Koa from 'koa'
import { AppRouter } from './app-router.js'
import { Database } from './database/database.js'
import EventEmitter2 from 'eventemitter2'

export const App = async () => {
  const app = new Koa()
  const database = await Database({ url: process.env.MONGODB_URL, dbName: process.env.DB_NAME })
  const events = new EventEmitter2()
  const router = AppRouter({ database, events })
  app.use(router.routes())
  app.on('error', err => {
    console.log(err)
  })
  return app
}
