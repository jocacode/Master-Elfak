import { RouteOptions } from 'fastify';

export default [
  {
    method: 'GET',
    url: '/cars',
    handler: () => console.log('cars'),
  },
] as Array<RouteOptions>;
