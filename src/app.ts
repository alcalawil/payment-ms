import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "@middlewares";
import { systemRouter } from "./routes";
import { logger } from "@shared";
import { config } from "@config";

const app: Application = express();
const apiVersion = "v1";

/* MIDDLEWARES */
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(morgan("dev"))
  .use(`/${apiVersion}/system`, systemRouter)
  .use(errorHandler);

logger.debug("", app.stack);
export { app };
