
const UserRepository = require("../repositories/user");
const Sessions = require("../services/sessions");



class SessionsController {
    async create(request, response) {
        const {email, password} = request.body;
        const userRepository = new UserRepository();
        const sessions = new Sessions(userRepository);
        try { 
            const {token, user} = await sessions.execute({ email, password });
            return response.json({token, user});
        } catch (error) {
              return response.status(error.statusCode || 500).json({ error: error.message });
        }
    }
}

module.exports = SessionsController