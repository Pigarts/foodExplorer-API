const FoodRepository = require("../repositories/foods")
const CreateFood = require("../services/createFood")
const UpdateFood = require("../services/updateFood")
const FindFoodCategories = require("../services/findFoodCategories")
const FindByCategory = require("../services/FoodsByCategory")
const GetAllFoods = require("../services/findAllFoods")
const GetFoodById = require("../services/GetFoodById")
const DiskStorage = require("../providers/diskstorage")
const DeleteFood = require("../services/deleteFood")
const SearchFood = require("../services/searchFood")


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
        response.status(201).json();
    }

    async update( request, response ) {
      const foodRepository = new FoodRepository();
      const updateFood = new UpdateFood(foodRepository);
      const diskStorage = new DiskStorage()
      const foodString = request.body.food;
      const food = JSON.parse(foodString);
      if(!response.file && food.img) {
        await updateFood.execute(food)
        response.status(201).json();
      }
      const imgFileName = request.file.filename;
      const foodImg = await diskStorage.saveFile(imgFileName)
      food.img = foodImg
      await updateFood.execute(food)
      response.status(201).json();
    }  

    async delete(request, response ) {
      const foodRepository = new FoodRepository();
      const deleteFood = new DeleteFood(foodRepository);
      const food = request.params
      console.log("cont", food.id)
      await deleteFood.execute(food.id)
    }

    async getBySearch(request, response) {
      const foodRepository = new FoodRepository();
      const searchFood = new SearchFood(foodRepository);
      const {search} = request.query
      const searchedFoods = await searchFood.execute(search)
      return response.json(searchedFoods)
    }

    async getCategories(request, response ) {
      const foodRepository = new FoodRepository();
      const findFoodCategories = new FindFoodCategories(foodRepository);
      try {
        const allCategories = await findFoodCategories.execute()
        return response.json(allCategories) 
        }
      catch (error) {
        return response.status(error.statusCode || 500).json({ error: error.message });
  }
    
      }
    async getFoodByCategory(request, response ) {
      const foodRepository = new FoodRepository();
      const findByCategory = new FindByCategory(foodRepository);
      const {category} = request.params
      try {
        const foods = await findByCategory.execute(category)
        return response.json(foods) 
        }
      catch (error) {
        return response.status(error.statusCode || 500).json({ error: error.message });
    }
    }
    
    async getFoodById(request, response ) {
          const foodRepository = new FoodRepository();
          const getFoodById = new GetFoodById(foodRepository);
          const {id} = request.params
          try {
            const food = await getFoodById.execute(id)
            return response.json(food) 
            }
          catch (error) {
            return response.status(error.statusCode || 500).json({ error: error.message });
      }
    }
    
    async getAllFoods(request, response ) {
      const foodRepository = new FoodRepository();
      const getAllFoods = new GetAllFoods(foodRepository);
      const {category} = request.params
      try {
        const foods = await getAllFoods.execute(category)
        return response.json(foods) 
        }
      catch (error) {
        return response.status(error.statusCode || 500).json({ error: error.message });
  }
    }
}



module.exports = foodsController