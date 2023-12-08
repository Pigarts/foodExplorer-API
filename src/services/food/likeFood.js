class LikeFood {
    constructor(FoodRepository) {
        this.FoodRepository = FoodRepository;
    }
    async execute(user, food) {
        const like = await this.FoodRepository.likeFood(user, food)
        return like
    }
}

module.exports = LikeFood