import 'dotenv/config';
import Fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import cors from 'fastify-cors';
import routes from './routes';
import controllers from './controllers';

import './db/connection';

const fastify: FastifyInstance = Fastify({
  logger: true,
});

fastify.register(cors);

controllers.schemas.forEach((schema) => fastify.addSchema(schema));
routes.forEach((route) => fastify.route(route));

const startServer = async () => {
  try {
    await fastify.listen(5000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

fastify.addHook('preValidation', (request: FastifyRequest, _, done) => {
  request.log.info({ body: request.body }, 'primljeni podaci');
  done();
});

startServer();
