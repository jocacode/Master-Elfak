import { FastifyReply, FastifyRequest } from 'fastify';
import { ICar } from '../../db/models/car.model';
import { IUser } from '../../db/models/user.model';
import carService from '../../services/car/car.service';

type EnhancedReques = FastifyRequest & {
  user: IUser;
};

async function createCarHandler(request: EnhancedReques, reply: FastifyReply) {
  const { user, body: carData } = request;

  const data = await carService.createCarAdvert(carData as ICar, user._id);

  return data;
}

async function editCarHandler(request: FastifyRequest, reply: FastifyReply) {
  reply.send(request.params);
} //auth

async function deleteCarHandler(request: EnhancedReques, reply: FastifyReply) {
  const {
    user,
    params: { id: carAdId },
  } = <{ user: IUser; params: { id: string } }>request;

  const data = await carService.deleteCarAdvert(carAdId, user._id);

  reply.send(data);
} //auth

async function getCarsPaginatedHandler(
  request: FastifyRequest,
  reply: FastifyReply,
) {}

async function getCarHandler(request: FastifyRequest, reply: FastifyReply) {}

async function getCarsHandler(request: FastifyRequest, reply: FastifyReply) {}

async function getMyCarsHandler(request: FastifyRequest, reply: FastifyReply) {} //auth

export default {
  createCarHandler,
  editCarHandler,
  deleteCarHandler,
  getCarsPaginatedHandler,
  getCarHandler,
  getCarsHandler,
  getMyCarsHandler,
};
