const { compare } = require("bcryptjs");
const {sign} = require("jsonwebtoken")
const AppError = require("../../utils/App.error")
const authConfig = require("../../configs/auth")

class Sessions {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async execute({email, password}) {
        const user = await this.UserRepository.findByEmail(email)
        if(!user) {
            throw new AppError("email ou senha invalido", 401)
        }
        const checkPassword = await compare(password, user.password)

        if(!checkPassword) {
            throw new AppError("email ou senha invalido", 401)
        }

        const {secret, expiresIn} = authConfig.jwt
        const token = sign({role: user.role}, secret, {
            subject: String(user.id),
            expiresIn
        })

        delete user.password
    return {token, user};
    }
}

module.exports = Sessions