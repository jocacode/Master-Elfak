const { PORT, CORS_ORIGIN, APP_URL, JWT_SECRET } = <
  { PORT: string; CORS_ORIGIN: string; APP_URL: string; JWT_SECRET: string }
>process.env;

if (!PORT || !CORS_ORIGIN || !APP_URL || !JWT_SECRET) {
  console.error('Server env vars are missing!');
  process.exit(1);
}

export { PORT, CORS_ORIGIN, APP_URL, JWT_SECRET };
