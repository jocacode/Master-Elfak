import { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../../models/User';
import { IUser, UserModel } from '../../db/models/user.model';
import userService from '../user/user.service';

export type AuthBody = {
  email: string;
  password: string;
};

const JWT_OPTION = {
  algorithm: 'HS256',
  expiresIn: '10d',
} as SignOptions;

interface IAuthService {
  verifyJwtToken(token: string, secret: string): JwtPayload | string;
  signJwtToken(payload: string | object, secret: Secret): string;
  hashPassword(password: string): any;
  checkPassword(password: string, userPassword: string): void;
  generateToken(payload: string | object): string;
  login(
    username: string,
    password: string,
  ): Promise<{ user: IUser; token: string }>;
  signup(userData: User): Promise<{ user: IUser; token: string }>;
}

export class AuthService implements IAuthService {
  verifyJwtToken(token: string, secret: Secret | string): JwtPayload | string {
    const payload = jwt.verify(token, secret);

    if (payload) return payload as { _id: string };
    else throw Error('1001');
  }

  signJwtToken(payload: string | object, secret: Secret) {
    const token = jwt.sign(payload, secret, JWT_OPTION);
    return token;
  }

  generateToken(payload: string | object) {
    return this.signJwtToken(payload, JWT_SECRET);
  }

  hashPassword(password: string) {
    const res = bcrypt.hashSync(password, 10);
    return res;
  }

  checkPassword(password: string, userPassword: string) {
    const res = bcrypt.compareSync(password, userPassword);
    return res;
  }

  async login(email: string, password: string) {
    const user = await userService.getByEmail(email);

    if (!user) {
      throw Error('User with provided email does not exists');
    }

    const isPasswordCorrect = this.checkPassword(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error('Password not matching');
    }

    const token = this.generateToken({ _id: user._id });

    return {
      user,
      token,
    };
  }

  async signup(userData: User) {
    const { email, password } = userData;
    const exists = await userService.checkIfUserExists(email);

    if (exists) {
      throw Error('User With this email already exists');
    }

    const hashedPassword = this.hashPassword(password);

    const user = await userService.createUser({
      ...userData,
      password: hashedPassword,
    } as User);

    const token = this.generateToken({ _id: user._id });

    return {
      user,
      token,
    };
  }
}

export default new AuthService();
