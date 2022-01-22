import { FastifyInstance } from 'fastify';

export const createUserSchema = {
  $id: 'userReq',
  type: 'object',
  properties: {
    username: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    dateOfBirth: { type: 'string' },
  },
  required: [
    'username',
    'email',
    'password',
    'firstName',
    'lastName',
    'dateOfBirth',
  ],
};
