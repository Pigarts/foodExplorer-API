const { Router } = require("express");
const OrdersController = require("../controllers/ordersController")
const ordersRoutes = Router();

const ensureAuth = require("../middlewares/ensureAuth");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const ordersController = new OrdersController();

ordersRoutes.use(ensureAuth)

ordersRoutes.post("/", verifyUserAuthorization("adm"), verifyUserAuthorization("adm"), ordersController.order);
ordersRoutes.patch("/changeorderstatus", verifyUserAuthorization("adm"), ordersController.attOrderStatus);
ordersRoutes.get("/orderstatus", ordersController.orderStatus);
ordersRoutes.get("/alluserorders", ordersController.userOrders);
ordersRoutes.get("/allorders", verifyUserAuthorization("adm"), ordersController.allOrders);

module.exports = ordersRoutes;