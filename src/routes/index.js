const { Router } = require("express");

const usersRouter = require("./user.routes");
const sessionRouter = require("./session.routes");
const foodsRouter = require("./foods.routes")

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/foods", foodsRouter)


module.exports = routes;