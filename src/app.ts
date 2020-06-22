import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { errorHandler } from "@middlewares";
import { systemRouter, paypalRouter } from "./routes";
import { logger } from "@shared";
import { config } from "@config";

const app: Application = express();
const apiVersion = "v1";

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(morgan("dev"))
  .use(`/${apiVersion}/system`, systemRouter)
  .use(`/${apiVersion}/paypal`, paypalRouter)
  .use(errorHandler);

app.get("/", (req, res) => {
  res.json({ message: 'Payment microservice', apiVersion });
});

export { app };
