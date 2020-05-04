const { core, orders } = require("@paypal/checkout-server-sdk");
import { IPaypalCreateOrderOptions } from "@types";
import { logger } from "../shared";

export class PaypalService {
  private environment: any;
  private client: any;
  constructor(clientId: string, clientSecret: string, useSandbox = false) {
    this.environment = useSandbox
      ? new core.SandboxEnvironment(clientId, clientSecret)
      : new core.LiveEnvironment(clientId, clientSecret);
    this.client = new core.PayPalHttpClient(this.environment);
  }

  public async createOrder(options: IPaypalCreateOrderOptions) {
    try {
      const request = new orders.OrdersCreateRequest();
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "5.00",
            },
          },
        ],
      });

      const order = await this.client.execute(request);
      return order;
    } catch (err) {
      logger.error(JSON.stringify(err));
      throw new Error("PayPal createOrder error: " + err.message);
    }
  }

  public async captureOrder(orderId: string) {
    try {
      const request = new orders.OrdersCaptureRequest(orderId);
      request.requestBody({});

      const capture = await this.client.execute(request);
      const captureId =
        capture.result.purchase_units[0].payments.captures[0].id;
      const payerName = capture.result.payer.name.given_name;

      return {
        payerName,
        captureId,
      };
    } catch (err) {
      logger.error(`Paypal Service -> captureOrder:`, err);
      throw new Error(`Paypal Service -> captureOrder: ${err.message}`);
    }
  }
}
