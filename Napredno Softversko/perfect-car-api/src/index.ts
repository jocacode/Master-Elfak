import Fastify, { FastifyInstance } from "fastify";

const fastify: FastifyInstance = Fastify({
  logger: true,
});

const startServer = async () => {
  try {
    await fastify.listen(5000);
  } catch (e) {
    console.log(e);
  }
};

startServer();
