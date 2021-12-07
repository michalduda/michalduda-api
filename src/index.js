import { API_PORT, APP_URL } from 'babel-dotenv'
import Koa from 'koa'
import router from '@/router'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import cors from '@koa/cors'

;(async () => {
  const app = new Koa()

  app.use(helmet.hidePoweredBy())
  app.use(helmet.noSniff())

  app.use(cors(
    {
      origin: APP_URL,
      credentials: true
    }
  ))

  app.use(
    bodyParser({
      enableTypes: ['json']
    })
  )
  app.use(router.routes())

  app.listen(API_PORT, () => {
    console.log(`App listening on port ${API_PORT}`)
  })
})()
