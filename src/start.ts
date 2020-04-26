import http from "http";
import { app } from "./app";
import { logger } from "@shared";

const port = Number(process.env.PORT || 3000);

const server = http.createServer(app);
server.listen(port);

logger.info(`Server listen at port: ${port}`);
