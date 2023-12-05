class foodByCategories {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute(category) {
        const foods = await this.FoodRepository.findByCategory(category)
        return foods
    }
}

module.exports = foodByCategories
