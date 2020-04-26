import { logger } from "../shared";
const ENV = process.env;

// Validate required configs here

export const config = {
  nodeEnv: ENV.NODE_ENV || "development",
  logLevel: ENV.LOG_LEVEL || "debug",
  serverPort: Number(ENV.SERVER_PORT) || 3000,
  serverApiKey: ENV.SERVER_API_KEY || null,
};
