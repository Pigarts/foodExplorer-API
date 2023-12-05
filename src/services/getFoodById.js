class GetFoodById {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute(id) {
        const food = await this.FoodRepository.getById(id)
        return food
    }
}

module.exports = GetFoodById
