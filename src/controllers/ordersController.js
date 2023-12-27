const OrdersRepository = require("../repositories/orders")
const NewOrder = require("../services/order/newOrder")
const GetOrderStatus = require("../services/get/order/getLatsOrderStatus")
const GetAllUserOrders = require("../services/get/order/getAllUserOrders")
const GetAllOrders = require("../services/get/order/getAllOrders")
const ChangeOrderStatus = require("../services/order/changeOrderStatus")

class ordersController {

    async order(request, response) {
      const {data} = request.body
      const user_id = request.user.id;
      const ordersRepository = new OrdersRepository();
      const newOrder = new NewOrder(ordersRepository);
      await newOrder.execute(data, user_id)
      response.status(201).json();
    }

    async orderStatus(request, response) {
      const user_id = request.user.id;
      const ordersRepository = new OrdersRepository();
      const getOrderStatus = new GetOrderStatus(ordersRepository);
      const lastOrder = await getOrderStatus.execute( user_id ) 
      response.status(200).json(lastOrder);
    }

    async userOrders(request, response) {
      const user_id = request.user.id;
      const ordersRepository = new OrdersRepository()
      const getAllUserOrders = new GetAllUserOrders(ordersRepository) 
      const orders = await getAllUserOrders.execute(user_id) 
      response.json(orders);
    }

    async allOrders(request, response) {
      const ordersRepository = new OrdersRepository()
      const getAllOrders = new GetAllOrders(ordersRepository) 
      const orders = await getAllOrders.execute() 
      response.json(orders);
    }

    async attOrderStatus(request, response) {
      const {newStatus, id} = request.body
      const ordersRepository = new OrdersRepository()
      const changeOrderStatus = new ChangeOrderStatus(ordersRepository) 
      const order = await changeOrderStatus.execute(newStatus, id) 
      response.json(order);
    }
}

module.exports = ordersController