import userController from './user.controller';
import { createUserSchema } from './schemas';

export default {
  userController,
  schemas: [createUserSchema],
};
