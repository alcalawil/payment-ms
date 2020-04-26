import { Request, Response, NextFunction } from "express";
import { logger } from "@shared";
import { config } from "@config";

const clientApiKeyValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientApiKey: string =
    req.get("api_key") ||
    req.get("api-key") ||
    req.get("Authentication") ||
    "no-key";

  if (!clientApiKey) {
    logger.error("Missing Api Key");
    return res.status(401).json({
      ok: false,
      response: "Missing Api Key",
    });
  }

  if (clientApiKey === config.serverApiKey) next();
  else {
    logger.error("Invalid Api Key");
    return res.status(401).send({
      ok: false,
      response: "Invalid Api Key",
    });
  }
};

export const authKey = clientApiKeyValidation;
