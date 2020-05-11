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

if (config.nodeEnv === "development") {
  // Use an example view to test the workflow
  app.use("/", express.static(path.join(__dirname, "..", "public")));
  app.get("/", (req, res) => {
    res.redirect("/index.html");
  });
}

export { app };
