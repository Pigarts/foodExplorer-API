class GetAllUserOrders {
    constructor(OrdersRepository) {
        this.OrdersRepository = OrdersRepository;
    }
    async execute(id) {
        const userOrders = await this.OrdersRepository.getAllUserOrders(id)
        return userOrders 
    }
}

module.exports = GetAllUserOrders
