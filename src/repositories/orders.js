const knex = require("../database/knex");

class OrdersRepository {
    async newOrder(order) {
        const nweOrder = await knex("orders").insert(order);
       return nweOrder
    }

    async getLastOrderStatus(user_id) {
        const status = await knex("orders").select("status")
        .where('user_id', user_id)
        .orderBy('created_at', 'desc')
        .limit(1);
        const lastOrder = status[0].status 
        return lastOrder
    }

    async getAllUserOrders(user_id) {
        console.log("repo")
        const orders = await knex("orders").select("*").where('user_id', user_id)
        .orderBy('created_at', 'desc');
        return orders
    }

    async getAllOrders() {
        const orders = await knex("orders").select("*")
        .orderBy('created_at', 'desc');
        return orders
    }

    async changeOrderStatus(newStatus, id) {
        const order = await knex("orders").update({ status: newStatus }).where('id', id)
        return order
    }
}

module.exports = OrdersRepository