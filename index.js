import { bootstrap } from './src/app.js'

const app = bootstrap()
const port = process.env.APP_PORT || 3000
app.listen(port, () => console.log(`Server started : ${port}`))
