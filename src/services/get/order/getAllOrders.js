class GetAllOrders {
    constructor(OrdersRepository) {
        this.OrdersRepository = OrdersRepository;
    }
    async execute(id) {
        const userOrders = await this.OrdersRepository.getAllOrders()
        return userOrders 
    }
}

module.exports = GetAllOrders
