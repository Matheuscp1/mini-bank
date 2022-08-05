import { Router } from 'express'
import { AccountRouter } from './account.routes'


const router = Router()

router.use(AccountRouter)


export { router }
