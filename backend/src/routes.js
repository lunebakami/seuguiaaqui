import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';
import EnterpriseController from './app/controllers/EnterpriseController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);

routes.post('/enterprises', EnterpriseController.store);
routes.get('/enterprises', EnterpriseController.index);
routes.get('/enterprises/:id', EnterpriseController.show);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
