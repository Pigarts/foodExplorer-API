const FoodRepository = require("../repositories/foods")
const CreateFood = require("../services/food/createFood")
const UpdateFood = require("../services/food/updateFood")
const DiskStorage = require("../providers/diskstorage")
const DeleteFood = require("../services/food/deleteFood")
const LikeFood = require("../services/food/likeFood")
const UnLikeFood = require("../services/food/unLikeFood")

class foodsController {
    async create( request, response ) {
      const foodRepository = new FoodRepository();
      const createFood = new CreateFood(foodRepository);
      const diskStorage = new DiskStorage()
      const foodString = request.body.food;
      const food = JSON.parse(foodString);
      const imgFileName = request.file.filename;
      const foodImg = await diskStorage.saveFile(imgFileName)
      food.img = foodImg
      await createFood.execute(food)
      return response.status(201).json()
    }

    async update( request, response ) {
      const foodRepository = new FoodRepository();
      const updateFood = new UpdateFood(foodRepository);
      const diskStorage = new DiskStorage()
      const foodString = request.body.food;
      const food = JSON.parse(foodString);
      if(!request.file && food.img) {
        console.log("sem igagem")
        await updateFood.execute(food)
        return response.status(200).json()
      }
      const imgFileName = request.file.filename;
      console.log(imgFileName)
      const foodImg = await diskStorage.saveFile(imgFileName)
      food.img = foodImg
      await updateFood.execute(food)
      return response.status(200).json()
    }  

    async delete(request, response ) {
      const foodRepository = new FoodRepository();
      const deleteFood = new DeleteFood(foodRepository);
      const food = request.params
      await deleteFood.execute(food.id)
      return response.status(200).json()
    }

    async like(request, response) {
      const foodRepository = new FoodRepository();
      const likeFood = new LikeFood(foodRepository);
      const {food} = request.body
      const user_id = request.user.id;
      await likeFood.execute(user_id, food)
      return response.status(200).json();
    }

    async unLike(request, response) {
      const foodRepository = new FoodRepository();
      const unLikeFood = new UnLikeFood(foodRepository);
      const { food } = request.query;
      const user_id = request.user.id;
      await unLikeFood.execute(user_id, food)
      return response.status(200).json();
    }

 
}

module.exports = foodsController