const FoodRepository = require("../repositories/foods")
const FindFoodCategories = require("../services/get/food/findFoodCategories")
const GetAllFoods = require("../services/get/food/findAllFoods")
const GetFoodById = require("../services/get/food/getFoodById")
const SearchFood = require("../services/get/search/searchFood")
const GetLikedFoods = require("../services/get/liked/getLikedFoods")

class GetFoodsController {

    async getLikeds(request, response ) {
      const foodRepository = new FoodRepository();
      const getLikedFoods = new GetLikedFoods(foodRepository);
      const {user} = request.query
      try {
        const likeds = await getLikedFoods.execute(user)
        return response.status(200).json(likeds) 
        }
      catch (error) {
        return response.status(error.statusCode || 500).json({ error: error.message });
  }
}

    async getBySearch(request, response) {
      const foodRepository = new FoodRepository();
      const searchFood = new SearchFood(foodRepository);
      const {search} = request.query
      const searchedFoods = await searchFood.execute(search)
      return response.status(200).json(searchedFoods)
    }

    async getCategories(request, response ) {
      const foodRepository = new FoodRepository();
      const findFoodCategories = new FindFoodCategories(foodRepository);
      try {
        const allCategories = await findFoodCategories.execute()
        return response.status(200).json(allCategories) 
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
            return response.status(200).json(food) 
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
        return response.status(200).json(foods) 
        }
      catch (error) {
        return response.status(error.statusCode || 500).json({ error: error.message });
  }
    }
}



module.exports = GetFoodsController