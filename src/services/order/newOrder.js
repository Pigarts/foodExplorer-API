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
        
        if (!cartValue) {
            throw new AppError("Houve um problema com o valor do pedido");
        }

        if(paymentMethod !== "pix") {
            function verifyCardInfos(card) {
            if (
              card.hasOwnProperty('cardNumber') &&
              card.hasOwnProperty('expiry') &&
              card.hasOwnProperty('cvc')
            ) {
              if (
                typeof card.cardNumber === 'string' &&
                card.cardNumber.length === 16 &&
                /^\d+$/.test(card.cardNumber) &&
                typeof card.expiry === 'string' &&
                card.expiry.length === 4 &&
                /^\d+$/.test(card.expiry) &&
                typeof card.cvc === 'string' &&
                card.cvc.length === 3 &&
                /^\d+$/.test(card.cvc)
              ) {
            return true;
              } else {
                return false; 
              }
            } else {
              return false;
            }
          }

          const checkPayment = verifyCardInfos(paymentMethod)

          if(!checkPayment ) {
            throw new AppError("pagamento não autorizado")
        }
        }


        function generateOrderString(order) {
            const orderStringArray = order.map(item => `${item.quantity} x ${item.name}`);
            return orderStringArray.join(', ');
        }
        
        const orderString = generateOrderString(order);


        const formattedOrder = {
            user_id,
            status: "Pendente",
            details: orderString}
        const newOrder = await this.OrdersRepository.newOrder(formattedOrder)
    return newOrder
    }
}
module.exports = NewOrder