import authController from './auth';
import userController from './user';
import carController from './car';

import { headersSchema } from '../utils/headers_schemas';

export default {
  authController,
  userController,
  carController,

  schemas: [
    ...authController.schemas,
    ...userController.schemas,
    ...carController.schemas,
    headersSchema,
  ],
};
