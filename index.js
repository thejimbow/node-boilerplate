import { App } from './src/app.js'

async function bootstrap () {
  const app = await App()
  const port = process.env.APP_PORT || 3000
  app.listen(port, () => console.log(`Server started : ${port}`))
}

bootstrap()
