declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV?: string;
    PORT?: string;
    LOG_LEVEL?: string;
    SERVER_PORT?: string;
    SERVER_API_KEY?: string;
    PAYPAL_ID?: string;
    PAYPAL_SECRET?: string;
    USE_SANDBOX?: string;
  }
}
