const AppError = require("../../../utils/App.error")
const { hash } = require("bcryptjs");

class SearchFood {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    
    async execute(search) {
        if(!search) {
            throw new AppError("Pesquisa perdida")
        }
        const searchedFoods = await this.FoodRepository.index(search)

    return searchedFoods;
    }
}
module.exports = SearchFood