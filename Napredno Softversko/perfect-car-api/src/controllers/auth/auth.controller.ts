import { FastifyRequest, FastifyReply } from 'fastify';
import { User } from '../../models/User';
import authService, { AuthBody } from '../../services/auth/auth.service';

async function loginHandler(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = request.body as AuthBody;
  const data = await authService.login(email, password);
  reply.send(data);
}

async function signupHandler(reqest: FastifyRequest, replay: FastifyReply) {
  const { body } = reqest;
  const data = await authService.signup(body as User);
  replay.send(data);
}

export default {
  loginHandler,
  signupHandler,
};
