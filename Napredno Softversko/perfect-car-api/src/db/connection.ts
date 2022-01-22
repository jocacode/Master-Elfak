import mongoose, { ConnectOptions } from 'mongoose';
import { MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } from '../config/mongodb';

const mongoURL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: MONGO_DB,
  } as ConnectOptions)
  .then(() => {
    console.log(`Connected to Mongo: ${mongoURL}`);
  })
  .catch((err) => {
    console.error('Database connection error', err);
  });
