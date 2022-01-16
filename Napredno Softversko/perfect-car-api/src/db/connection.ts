import mongoose, { ConnectOptions } from 'mongoose';
import {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DB,
  MONGO_SOURCE,
} from '../config/mongodb';

const mongoURL = `mongodb://${MONGO_HOSTNAME}/${MONGO_PORT}/${MONGO_DB}`;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    poolSize: 5,
    user: MONGO_USERNAME,
    pass: MONGO_PASSWORD,
    authSource: MONGO_SOURCE,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: MONGO_DB,
  } as ConnectOptions)
  .then(() => {
    console.log(`Connected to Mongo: ${mongoURL}`);
  })
  .catch((err) => {
    console.error('Database connection error', err);
  });
