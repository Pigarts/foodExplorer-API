const { Router } = require("express");
const FoodsController = require("../controllers/foodsController")
const GetFoodsController = require("../controllers/getFoodsController")

const foodsRoutes = Router();
const uploadsConfig = require("../configs/upload")
const multer = require("multer")

const ensureAuth = require("../middlewares/ensureAuth");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const UPLOAD = multer(uploadsConfig.MULTER)

const foodsController = new FoodsController();
const getFoodsController = new GetFoodsController()

foodsRoutes.use(ensureAuth)

foodsRoutes.post("/create", verifyUserAuthorization("adm"), UPLOAD.single("img"), foodsController.create);
foodsRoutes.put("/update", verifyUserAuthorization("adm"), UPLOAD.single("img"), foodsController.update);
foodsRoutes.delete("/delete/:id", verifyUserAuthorization("adm"), foodsController.delete);

foodsRoutes.post("/like", foodsController.like)
foodsRoutes.delete("/unlike", foodsController.unLike)

foodsRoutes.get("/", getFoodsController.getBySearch)
foodsRoutes.get("/id/:id", getFoodsController.getFoodById);
foodsRoutes.get("/allFoods", getFoodsController.getAllFoods);
foodsRoutes.get("/likeds", getFoodsController.getLikeds);


module.exports = foodsRoutes;