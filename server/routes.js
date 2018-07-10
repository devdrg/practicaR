import express from 'express';

/// Controllers import
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';
import deleteController from './controllers/deleteController';

const routes = express();

/// Basic routes
routes.get('/', basicController.get);

/// User routes
routes.post('/register', userController.register);
routes.post('/login', userController.login);

/// Post routes
routes.post('/newpost', postController.post);
routes.get('/posts', postController.GetAll);

/// Delete routes
routes.delete('/:userId', deleteController.delete);

/// Comment routes
routes.post('/comment', commentController.post);

export default routes;