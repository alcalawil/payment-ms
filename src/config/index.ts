import { logger } from "../shared";
const ENV = process.env;

// TODO: Validate required configs here
if (!ENV.PAYPAL_ID || !ENV.PAYPAL_SECRET) {
  logger.error("CONFIG ERROR: PAYPAL_ID and PAYPAL_SECRET are required");
  process.exit();
}

const config = {
  nodeEnv: ENV.NODE_ENV || "development",
  logLevel: ENV.LOG_LEVEL || "debug",
  serverPort: Number(ENV.SERVER_PORT) || 3000,
  serverApiKey: ENV.SERVER_API_KEY || null,
  paypal: {
    clientId: ENV.PAYPAL_ID,
    clientSecret: ENV.PAYPAL_SECRET,
    useSandbox: ENV.NODE_ENV === "production" ? false : true,
  },
};

export { config };
