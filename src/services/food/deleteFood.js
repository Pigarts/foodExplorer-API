const AppError = require("../../utils/App.error")
const { hash } = require("bcryptjs");

class DeleteFood {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    
    async execute(id) {
        if(!id) {
            throw new AppError("Prato não identificado")
        }
        const deletedFood = await this.FoodRepository.deleteFood(id)

    return deletedFood;
    }
}
module.exports = DeleteFood