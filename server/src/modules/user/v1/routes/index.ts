import { Router } from 'express';
import UserRoutes from './user.routes';
import authCheck from '@/shared/middlewares/authCheck';

const router = Router();

router.use(UserRoutes, authCheck);

export default router;
