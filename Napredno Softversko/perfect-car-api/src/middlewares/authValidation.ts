import { clear } from 'console';
import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/server';
import userService from '../services/user/user.service';

type AuthJWTPayload = {
  _id: string;
};

export async function authValidator(
  request: FastifyRequest,
  _: FastifyReply,
  done: Function,
) {
  const [tokenType, token] = (request.headers.authorization || '')?.split(' ');

  if (tokenType !== 'Bearer' || !token) {
    throw new Error('Authorization Error');
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthJWTPayload;
    const user = await userService.getUserById(payload._id);
    (request as any).user = user;

    if (!user)
      throw new Error('Authorization Error! User is not exist in database!');
    else done();
  } catch (err: any) {
    throw new Error('Authorization Error');
  }
}
