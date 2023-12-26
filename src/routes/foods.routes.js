const { Router } = require("express");
const FoodsController = require("../controllers/foodsController")
const GetFoodsController = require("../controllers/getController")

const foodsRoutes = Router();
const uploadsConfig = require("../configs/upload")
const multer = require("multer")

const ensureAuth = require("../middlewares/ensureAuth")

const UPLOAD = multer(uploadsConfig.MULTER)

const foodsController = new FoodsController();
const getFoodsController = new GetFoodsController()

foodsRoutes.use(ensureAuth)

foodsRoutes.post("/create", UPLOAD.single("img"), foodsController.create);
foodsRoutes.put("/update", UPLOAD.single("img"), foodsController.update);
foodsRoutes.delete("/delete/:id", foodsController.delete);

foodsRoutes.get("/", getFoodsController.getBySearch)
foodsRoutes.get("/categories", getFoodsController.getCategories);
foodsRoutes.get("/id/:id", getFoodsController.getFoodById);
foodsRoutes.get("/allFoods", getFoodsController.getAllFoods);
foodsRoutes.get("/likeds", getFoodsController.getLikeds);

foodsRoutes.post("/like", foodsController.like)
foodsRoutes.delete("/unlike", foodsController.unLike)

module.exports = foodsRoutes;