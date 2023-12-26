const AppError = require("../../utils/App.error")

class NewOrder {
    constructor(OrdersRepository) {
        this.OrdersRepository = OrdersRepository;
    }
    async execute(data, user_id) {
        const {paymentMethod, order, cartValue} = data

        if(!user_id ) {
            throw new AppError("Usuario não identificado")
        }
        
        if(!paymentMethod ) {
            throw new AppError("Metodo de pagamento não identificado")
        }
        
        if(!order) {
            throw new AppError("Itens do pedido não identificados")
        }

        function generateOrderString(order) {
            const orderStringArray = order.map(item => `${item.quantity} x ${item.name}`);
            return orderStringArray.join(', ');
        }
        
        const orderString = generateOrderString(order);

        if (!cartValue) {
            throw new AppError("Houve um problema com o valor do pedido");
        }

        const formattedOrder = {
            user_id,
            status: "Pendente",
            details: orderString}
        const newOrder = await this.OrdersRepository.newOrder(formattedOrder)
    return newOrder
    }
}
module.exports = NewOrder