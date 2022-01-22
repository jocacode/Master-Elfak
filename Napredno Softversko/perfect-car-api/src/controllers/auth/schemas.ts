import { FastifySchema } from 'fastify';

export const loginSchema = {
  $id: 'loginReq',
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['email', 'password'],
} as FastifySchema;
