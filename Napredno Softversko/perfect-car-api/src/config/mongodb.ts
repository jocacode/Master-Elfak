const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DB = 'perfect-car',
  MONGO_SOURCE = 'admin',
  MONGO_HOSTNAME = 'localhost',
  MONGO_PORT = '27017',
} = process.env;

if (!MONGO_DB || !MONGO_HOSTNAME) {
  console.error('MongoDB env vars are missing!');
  process.exit(1);
}

export {
  MONGO_HOSTNAME,
  MONGO_USERNAME,
  MONGO_DB,
  MONGO_SOURCE,
  MONGO_PORT,
  MONGO_PASSWORD,
};
