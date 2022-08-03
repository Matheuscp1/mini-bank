import { AccountController } from '../controllers/AccountController';
import { Router } from 'express';

const router = Router();
const controller = new AccountController();

router.post('/account', controller.create)


export { router as AccountRouter };
