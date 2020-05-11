const ENV = process.env;

// Validate required configs here
if (!ENV.PAYPAL_ID || !ENV.PAYPAL_SECRET) {
  console.error("CONFIG ERROR: PAYPAL_ID and PAYPAL_SECRET are required");
  process.exit();
}

const config = {
  nodeEnv: ENV.NODE_ENV || "development",
  logLevel: ENV.LOG_LEVEL || "debug",
  serverPort: Number(ENV.PORT || "5000"),
  serverApiKey: ENV.SERVER_API_KEY || null,
  paypal: {
    clientId: ENV.PAYPAL_ID,
    clientSecret: ENV.PAYPAL_SECRET,
    useSandbox: false,
  },
};

console.log(`Using Sandbox Paypal: ${config.paypal.useSandbox}`);

export { config };
