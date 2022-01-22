import authController from './auth';
import userController from './user';

export default {
  authController,
  userController,

  schemas: [...authController.schemas, ...userController.schemas],
};
