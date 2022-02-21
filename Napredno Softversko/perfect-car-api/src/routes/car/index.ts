import { RouteOptions } from 'fastify';
import carController from '../../controllers/car/car.controller';
import { ICar } from '../../db/models/car.model';
import { authValidator } from '../../middlewares/authValidation';
import carService from '../../services/car/car.service';

export default [
  {
    method: 'GET', //TODO
    url: '/cars',
    handler: carController.getCarsPaginatedHandler,
    schema: {
      headers: {
        $ref: 'headersSchema#',
      },
    },
  },
  {
    method: 'GET', //TODO
    url: '/cars/my-cars',
    handler: carController.getMyCarsHandler,
    preValidation: authValidator,
  },

  {
    method: 'DELETE', //TODO
    url: '/car/:id',
    handler: carController.deleteCarHandler,
    preValidation: authValidator,
  },
  {
    method: 'POST',
    url: '/car',
    handler: async (request, reply) => {
      const data = await carService.createCarAdvert(
        request.body as ICar,
        (request as any).user.id,
      );

      return reply.send({ data });
    },
    preValidation: authValidator,
    schema: {
      body: {
        $ref: 'carSchema#',
      },
    },
  },
  {
    method: 'PUT', //TODO
    url: '/car/:id',
    handler: carController.editCarHandler,
    preValidation: authValidator,
    schema: {
      body: {
        $ref: 'carSchema#',
      },
    },
  },
] as Array<RouteOptions>;
