const AppError = require("../utils/App.error")
const { hash } = require("bcryptjs");

class UpdateFood {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    
    async execute(food) {
        const {id, name, category, descriptions, foodIngredients, price, img} = food
        if(!id || !name || !category || !descriptions || !foodIngredients || !price || !img) {
            throw new AppError("Há dados faltando")
        }

        const updatedFood = await this.FoodRepository.update({id, name, category, descriptions, foodIngredients, price, img})
        
        return updatedFood;
    }
}
module.exports = UpdateFood