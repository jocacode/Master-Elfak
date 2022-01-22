import { Document, model, Schema } from 'mongoose';
import validator from 'validator';

interface IUser extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
}

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: (value: string) => validator.isEmail(value),
  },
  password: { type: String, required: true },
  address: { type: String, required: false },
  phoneNumber: { type: String, required: false },
});

const UserModel = model<IUser>('User', UserSchema);

export { UserModel, UserSchema, IUser };
