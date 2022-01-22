import { RouteOptions } from 'fastify';
import authController from '../../controllers/auth/auth.controller';

export default [
  {
    method: 'POST',
    url: '/login',
    handler: authController.loginHandler,
    schema: {
      body: {
        $ref: 'loginReq#',
      },
    },
  },
  {
    method: 'POST',
    url: '/signup',
    handler: authController.signupHandler,
    schema: {
      body: {
        $ref: 'userReq#',
      },
    },
  },
] as Array<RouteOptions>;
