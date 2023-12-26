class GetAllUserOrders {
    constructor(OrdersRepository) {
        this.OrdersRepository = OrdersRepository;
    }
    async execute(id) {
        console.log("serv")
        const userOrders = await this.OrdersRepository.getAllUserOrders(id)
        return userOrders 
    }
}

module.exports = GetAllUserOrders
