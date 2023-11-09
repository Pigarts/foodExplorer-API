class FindAllFoods {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute() {
        const foods = await this.FoodRepository.getAllFoods()
        return foods
    }
}

module.exports = FindAllFoods