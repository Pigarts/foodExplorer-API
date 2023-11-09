class FindFoodById {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute(id) {
        const food = await this.FoodRepository.findById(id)
        return food
    }
}

module.exports = FindFoodById