class UnLikeFood {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute(user, food) {
        const unLike = await this.FoodRepository.unLikeFood(user, food)
        return unLike
    }
}

module.exports = UnLikeFood