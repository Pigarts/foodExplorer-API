const { Router } = require("express");
const FoodsController = require("../controllers/foodsController")
const GetFoodsController = require("../controllers/getFoodsController")

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

foodsRoutes.post("/like", foodsController.like)
foodsRoutes.delete("/unlike", foodsController.unLike)

foodsRoutes.get("/", getFoodsController.getBySearch)
foodsRoutes.get("/id/:id", getFoodsController.getFoodById);
foodsRoutes.get("/allFoods", getFoodsController.getAllFoods);
foodsRoutes.get("/likeds", getFoodsController.getLikeds);


module.exports = foodsRoutes;