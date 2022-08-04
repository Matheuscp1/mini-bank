import { AccountController } from '../controllers/AccountController';
import { Router } from 'express';

const router = Router();
const controller = new AccountController();

router.post('/account', controller.create)
router.get('/account', controller.get)
router.get('/account/:id', controller.getById)
export { router as AccountRouter };
