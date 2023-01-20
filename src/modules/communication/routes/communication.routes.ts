import { Router } from 'express';
import listAllCommunicationController from '../controllers/ListAllCommunicationController';
import deleteCommunicationController from '../controllers/DeleteCommunicationController';
import editCommunicationController from '../controllers/EditCommunicationController';
import createCommunicationController from '../controllers/CreateCommunicationController';
import listLastCommunicationController from '../controllers/ListLastCommunicationController';

const communicationRoutes = Router();

communicationRoutes.get(
  '/communication/list/:courseCode/:courseId',
  listAllCommunicationController.execute,
);

communicationRoutes.get(
  '/communication/list/last/:courseCode/:courseId',
  listLastCommunicationController.execute,
);

communicationRoutes.delete(
  '/communication/delete/:communicationId',
  deleteCommunicationController.execute,
);

communicationRoutes.put(
  '/communication/edit/:communicationId',
  editCommunicationController.execute,
);

communicationRoutes.post(
  '/communication/create',
  createCommunicationController.execute,
);

export default communicationRoutes;
