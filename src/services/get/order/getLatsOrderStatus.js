class GetOrderStatus {
    constructor(OrdersRepository) {
        this.OrdersRepository = OrdersRepository;
    }
    async execute(id) {
        const lastOrder = await this.OrdersRepository.getLastOrderStatus(id)
        return lastOrder 
    }
}

module.exports = GetOrderStatus
