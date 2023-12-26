const { Router } = require("express");
const OrdersController = require("../controllers/ordersController")
const ordersRoutes = Router();

const ensureAuth = require("../middlewares/ensureAuth")

const ordersController = new OrdersController();

ordersRoutes.use(ensureAuth)

ordersRoutes.post("/", ordersController.order);
ordersRoutes.get("/orderstatus", ordersController.orderStatus);
ordersRoutes.get("/alluserorders", ordersController.userOrders);
ordersRoutes.get("/allorders", ordersController.allOrders);
ordersRoutes.patch("/changeorderstatus", ordersController.attOrderStatus);

module.exports = ordersRoutes;