import { RouteOptions } from 'fastify';

export default [
  {
    method: 'POST',
    url: '/register',
    handler: () => console.log('user-register'),
  },
] as Array<RouteOptions>;
