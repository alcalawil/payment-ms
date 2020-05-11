import http from "http";
import { app } from "./app";
import { logger } from "@shared";
import { config } from "@config";

const port = config.serverPort;

const server = http.createServer(app);
server.listen(port);

logger.info(`Server listen at port: ${port}`);
