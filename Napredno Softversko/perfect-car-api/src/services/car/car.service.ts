import user from '../../controllers/user';
import {} from 'mongoose';
import { CarModel, ICar } from '../../db/models/car.model';
import userService from '../user/user.service';

interface ICarService {
  createCarAdvert(data: ICar, userId: string): Promise<ICar & { _id: string }>;
  deleteCarAdvert(
    carAdId: string,
    userId: string,
  ): Promise<{ message: string; car: ICar }>;

  getCarById(carId: string): Promise<ICar | null>;
}

export class CarService implements ICarService {
  public car: typeof CarModel;

  constructor() {
    this.car = CarModel;
  }

  async createCarAdvert(
    data: ICar,
    userId: string,
  ): Promise<ICar & { _id: string }> {
    const user = await userService.getUserById(userId);

    if (!user) {
      throw new Error('There is no user with provided userId');
    }

    const car = new CarModel({ ...data, userId });

    return car;
  }

  async getCarById(carId: string): Promise<ICar | null> {
    return this.car.findOne({ _id: carId });
  }

  async deleteCarAdvert(
    carAdId: string,
    userId: string,
  ): Promise<{ message: string; car: ICar }> {
    const user = await userService.getUserById(userId);
    const car = await this.getCarById(carAdId);

    if (!user || !car) {
      throw new Error('1005');
    }

    await this.car.deleteOne({ _id: carAdId, userId: userId });

    return {
      message: 'Successfully deleted car advert',
      car,
    };
  }
}

export default new CarService();
