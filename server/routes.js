import express from 'express';

/// Controllers import
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

/// Basic routes
routes.get('/', basicController.get);

/// User routes
routes.post('/signup', userController.post);

/// Post routes
routes.post('/newpost', postController.post);
routes.get('/posts', postController.GetAll);

/// Comment routes
routes.post('/comment', commentController.post);

export default routes;