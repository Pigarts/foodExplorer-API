const UserRepository = require("../repositories/user");
const CreateUser = require("../services/user/createUser");

class UsersController {
    async create( request, response ) {
      const {name, email, password} = request.body;
      const userRepository = new UserRepository();
      const createUser = new CreateUser(userRepository);
      await createUser.execute({name, email, password})

      response.status(201).json();
    }
 }

module.exports = UsersController