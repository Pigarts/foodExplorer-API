const AppError = require("../../utils/App.error")
const { hash } = require("bcryptjs");

class CreateFood {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    
    async execute(food) {
        const {category, name, descriptions, ingredients, price, img} = food
        
        if(!name || !category || !descriptions || !ingredients || !price || !img) {
            throw new AppError("Preencha todos os campos")
        }
        const createdFood = await this.FoodRepository.create({category, name, descriptions, price, img, ingredients})

    return createdFood;
    }
}
module.exports = CreateFood