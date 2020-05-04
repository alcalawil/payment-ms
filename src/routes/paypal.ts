import { Router } from "express";
import { PaypalController } from "@controllers";
const router = Router();
const paypalController = new PaypalController();
/****** ************************************************************************
 *                       Create Order - "Post /paypal/status"
 ******************************************************************************/
router.post("/create-order", paypalController.createOrder);
router.post("/capture", paypalController.captureOrder);

export { router as paypalRouter };
