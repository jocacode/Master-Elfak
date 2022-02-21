import { IUser, UserModel } from '../../db/models/user.model';
import { Document, Model } from 'mongoose';
import { User } from '../../models/User';
import { escapeRegExp } from '../../utils/escape_regexp';

type IUserService = {
  getUserById(userId: string): Promise<IUser | null>;
  getByEmail(email: string): Promise<IUser | null>;
  createUser(userData: User): Promise<IUser>;
};

export class UserService implements IUserService {
  public user: typeof UserModel;

  constructor() {
    this.user = UserModel;
  }

  async createUser(userData: User) {
    return new this.user(userData).save();
  }

  async getUserById(userId: string) {
    const user = this.user.findOne({ _id: userId });

    if (!user) {
      throw Error('1002');
    }

    return user;
  }

  async getByEmail(email: string) {
    return this.user.findOne({ email });
  }

  async checkIfUserExists(email: string): Promise<boolean> {
    return this.user.exists({
      email: { $regex: new RegExp(escapeRegExp(email), 'i') },
    });
  }
}

export default new UserService();
