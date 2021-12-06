import Router from '@koa/router'

import twitter from '@/app/twitter/routes'

const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World'
})

router.use('/twitter', twitter.routes())

export default router
