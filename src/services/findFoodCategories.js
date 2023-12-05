class findFoodCategories {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute() {
        const {categories} = await this.FoodRepository.findCategory()
        return categories
    }
}

module.exports = FindFoodCategories
