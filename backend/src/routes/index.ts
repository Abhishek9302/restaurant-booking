import { Router } from 'express';
import bookingsRouter from './bookings';
import authRouter from './auth';

const router = Router();

router.use('/api/bookings', bookingsRouter);
router.use('/api/auth', authRouter);

export default router;