import { Router } from 'express';
import communicationRoutes from '../modules/communication/routes/communication.routes';

const router = Router();

router.use(communicationRoutes);

export default router;
