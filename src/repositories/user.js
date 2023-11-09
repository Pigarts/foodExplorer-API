const knex = require("../database/knex");

class UserRepository {
    async findByEmail(email) {
        const user = await knex('users').select('*').where('email', email).first();
        return user
    } 

    async create({name, email, password}) {
        const user = {name, email, password}
        console.log(user)
        const userId = await knex("users").insert(user);
        return {id: userId}
    } 

}

module.exports = UserRepository