import { createLogger, format, transports } from "winston";
import { config } from "@config";

const { Console } = transports;

// Init Logger
const winstonLogger = createLogger({
  level: config.logLevel,
});

if (config.nodeEnv === "development" || config.nodeEnv === "production") {
  // use development log until prod logger is finished
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
