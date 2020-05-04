import { Request, Response, NextFunction } from "express";
import { PaypalService } from "@services";
import { BaseController } from "./BaseController";
import { config } from "@config";
import { logger } from "../shared";

export class PaypalController extends BaseController {
  private paypalService: PaypalService;
  constructor() {
    super();
    this.paypalService = new PaypalService(
      config.paypal.clientId,
      config.paypal.clientSecret,
      config.paypal.useSandbox
    );
  }

  createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order = await this.paypalService.createOrder({});
      res.status(201).json({
        orderId: order.result.id,
      });
    } catch (err) {
      logger.error(`createOrder Error:`, err);
      next(new Error(`createOrder Error: ${err.message}`));
    }
  };

  captureOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { orderId }: { orderId: string } = req.body;
      const captureResult = await this.paypalService.captureOrder(orderId);
      res.status(201).json(captureResult);
    } catch (err) {
      logger.error(`captureOrder Error:`, err);
      next(new Error(`captureOrder Error: ${err.message}`));
    }
  };
}
