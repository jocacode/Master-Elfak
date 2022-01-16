import Fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import routes from './routes';

const fastify: FastifyInstance = Fastify({
  logger: true,
});

fastify.register(cors);
routes.forEach((route) => fastify.route(route));

const startServer = async () => {
  try {
    await fastify.listen(5000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

startServer();
