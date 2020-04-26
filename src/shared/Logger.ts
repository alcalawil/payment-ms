import { createLogger, format, transports } from "winston";
import { config } from "@config";

const { Console } = transports;

// Init Logger
const winstonLogger = createLogger({
  level: config.logLevel,
});

/**
 * For production write to all logs will go to AWS CloudWatch
 **/
if (config.nodeEnv === "development") {
  const errorStackFormat = format((info) => {
    if (info.stack) {
      // tslint:disable-next-line:no-console
      console.log(info.stack);
      return false;
    }
    return info;
  });
  const consoleTransport = new Console({
    format: format.combine(
      format.colorize(),
      format.simple(),
      errorStackFormat()
    ),
  });
  winstonLogger.add(consoleTransport);
} else if (config.nodeEnv === "production") {
  // TODO: Add production logger layer
}

export const logger = winstonLogger;
