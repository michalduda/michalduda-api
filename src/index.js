import { APP_PORT } from 'babel-dotenv'
import Koa from 'koa'
import router from '@/router'
import bodyParser from 'koa-bodyparser'

;(async () => {
  const app = new Koa()

  app.use(router.routes())

  app.use(
    bodyParser({
      enableTypes: ['json']
    })
  )

  app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`)
  })
})()
