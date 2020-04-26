import { Response, Request, NextFunction } from "express";
import { IHTTPError } from "@types";

export function errorHandler(
  err: IHTTPError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // check if the headers were sent
  if (res.headersSent) {
    // Error handling is delegated to Express
    return next(err);
  }

  res.status(err.code || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
}
