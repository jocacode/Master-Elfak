import authController from './auth.controller';
import { loginSchema } from './schemas';

export default {
  authController,
  schemas: [loginSchema],
};
