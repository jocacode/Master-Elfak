import { FastifyRequest, FastifyReply } from 'fastify';
import { User } from '../../models/User';
import userService from '../../services/user/user.service';

async function createUser(request: FastifyRequest, replay: FastifyReply) {
  const createdUser = await userService.createUser(request.body as User);
  replay.send(createdUser);
}

export default {
  createUser,
};
