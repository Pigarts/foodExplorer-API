const knex = require("../database/knex");

class UserRepository {
    async findByEmail(email) {
        const user = await knex('users').select('*').where('email', email).first();
        return user
    } 

    async create({name, email, password}) {
        const user = {name, email, password}

        const userId = await knex("users").insert(user);
        if(userId == 1) {
            await knex("users").update("adm", "true").where({id: 1})
        }
        return {id: userId}
    } 

}

module.exports = UserRepository