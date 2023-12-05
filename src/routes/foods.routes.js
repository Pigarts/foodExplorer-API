const { Router } = require("express");
const FoodsController = require("../controllers/foodsController")
const foodsRoutes = Router();
const uploadsConfig = require("../configs/upload")
const multer = require("multer")

const ensureAuth = require("../middlewares/ensureAuth")


const UPLOAD = multer(uploadsConfig.MULTER)

const foodsController = new FoodsController();

foodsRoutes.use(ensureAuth)

foodsRoutes.post("/create", UPLOAD.single("img"), foodsController.create);
foodsRoutes.put("/update", UPLOAD.single("img"), foodsController.update);
foodsRoutes.delete("/delete/:id", foodsController.delete);
foodsRoutes.get("/", foodsController.getBySearch)

foodsRoutes.get("/categories", foodsController.getCategories);
foodsRoutes.get("/foodByCategories/:category", foodsController.getFoodByCategory);
foodsRoutes.get("/id/:id", foodsController.getFoodById);
foodsRoutes.get("/allFoods", foodsController.getAllFoods);

module.exports = foodsRoutes;