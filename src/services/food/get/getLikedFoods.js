class GetLikedFoods {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute(user) {
        const foods = await this.FoodRepository.getLikedFoods(user)
        return foods
    }
}

module.exports = GetLikedFoods