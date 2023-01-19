import { Router } from 'express';
import listAllCommunicationController from '../controllers/ListAllCommunicationController';

const communicationRoutes = Router();

communicationRoutes.get(
  '/communication/list/:courseCode/:courseId',
  listAllCommunicationController.execute,
);

export default communicationRoutes;
