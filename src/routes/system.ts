import { Request, Response, Router } from "express";

const systemRouter = Router();

/****** ************************************************************************
 *                       Health Check - "GET /{version}/system/status"
 ******************************************************************************/
systemRouter.get("/status", (req: Request, res: Response) => {
  res.status(200).json({ ok: true, serverTime: new Date().toString() });
});

export { systemRouter };
