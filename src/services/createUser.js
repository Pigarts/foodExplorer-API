const AppError = require("../utils/App.error")
const { hash } = require("bcryptjs");

class CreateUser {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async execute({name, email, password}) {
        if(!name) {
            throw new AppError("nome é obrigatorio")
        }
        
        if(!email) {
            throw new AppError("email é obrigatorio")
        }

        const checkUserExists = await this.UserRepository.findByEmail(email)
        if(checkUserExists){
            throw new AppError("este email ja foi cadastrado ")
        }
        
        if(!password) {
            throw new AppError("senha é obrigatoria")
        }

        const hashedPassword = await hash(password,8);
        const createdUser = await this.UserRepository.create({name, email, password: hashedPassword})

    return createdUser;
    }
}
module.exports = CreateUser