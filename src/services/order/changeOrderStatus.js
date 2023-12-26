const AppError = require("../../utils/App.error")

class ChangeOrderStatus {
    constructor(OrdersRepository) {
        this.OrdersRepository = OrdersRepository;
    }
    async execute(newStatus, id) {
        if(!newStatus || !id) {
            throw new AppError("Ocorreu algum erro com as informações do pedido")
        }
        await this.OrdersRepository.changeOrderStatus(newStatus, id)
    return ;
    }
}
module.exports = ChangeOrderStatus