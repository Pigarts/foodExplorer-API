const knex = require("../database/knex");

class FoodRepository {
    async create({category, name, descriptions, ingredients, price, img}) {
        const food = {category, name, descriptions, price, img}
        const [id] = await knex("products").insert(food);
        
        if(ingredients && ingredients.length > 0) {
            const ingredientsInsert = ingredients.map(name => {
                return {    
                    product_id: id,
                    name
                }
            });
            
            await knex("ingredients").insert(ingredientsInsert);
        }
    }

    async update({id, name, category, descriptions, foodIngredients, price, img}) {
        const food = {name, category, descriptions, price, img}

        await knex("products").update(food).where({id: id});
        await knex('ingredients').where({ product_id: id }).del()

        if(foodIngredients && foodIngredients.length > 0) {
            const ingredientsInsert = foodIngredients.map(name => {
                return {    
                    product_id: id,
                    name
                }
            });
            await knex("ingredients").insert(ingredientsInsert);
        }
    }

    async deleteFood(id) {
        await knex('products').where({ id: id }).del()
    }
    
    async likeFood(user, food) {
        const liked = {user_id: user, product_id: food }
        const likedId = await knex("likedFoods").insert(liked);
        if(likedId) {

        } 
    }

    async unLikeFood(user, food) {
        const unLiked = await knex("likedFoods").where({ product_id: food }).whereLike("user_id", user).del()
        return unLiked
    }

    async getLikedFoods(user) {
        const foods = await knex('products')
        .innerJoin("likedFoods", "likedFoods.product_id", "products.id")
        .select(["products.name", "products.img","products.id"])
        .whereLike("likedFoods.user_id", `%${user}%`)
        return foods
    }

    async index(search) {
        const name = await knex('products')
        .select(["name", "img","id"])
        .whereLike("name", `%${search}%`)
        
        const ingredients = await knex('products')
        .innerJoin("ingredients", "ingredients.product_id", "products.id")
        .select(["products.name", "products.img","products.id", "ingredients.name as ingredient"])
        .whereLike("ingredients.name", `%${search}%`)
        .distinct()

        const combinedResults = [...name, ...ingredients];

        const uniqueResults = combinedResults.filter((result, index, self) => 
          index === self.findIndex((r) => r.id === result.id)
        );

        return uniqueResults
    }

    async findCategory() {
        const categories = await knex('products').distinct('category').pluck('category');
        return {categories}
    } 

    async getAllFoods() {
        const allFoods = await knex('products').select('*');
        return allFoods
    } 
    
    async getById(id) {
        const food = await knex('products').where('id', id).first()
        const foodIngredients = await knex('ingredients').where('product_id', id);
        const foodWithIngredients = {...food, foodIngredients}
        return foodWithIngredients
    }

}

module.exports = FoodRepository