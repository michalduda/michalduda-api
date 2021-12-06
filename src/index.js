import { APP_PORT } from 'babel-dotenv'
import Koa from 'koa'
import router from '@/router'

;(async () => {
  /**
  * Create app instance
  */
  const app = new Koa()

  /**
   * Routes
   */
  app.use(router.routes())

  /**
   * Launch app
   */
  app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`)
  })
})()
