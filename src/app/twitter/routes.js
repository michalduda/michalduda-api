import Router from '@koa/router'
import { feedController } from '@/app/twitter/controllers/feed'

const router = new Router()

router.get('/feed', feedController)

export default router
