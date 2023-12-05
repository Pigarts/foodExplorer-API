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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new AppError("Formato de e-mail inválido");
        }

        const checkUserExists = await this.UserRepository.findByEmail(email)
        if(checkUserExists){
            throw new AppError("este email ja foi cadastrado ")
        }
        
        if(!password) {
            throw new AppError("senha é obrigatoria")
        }

        if (password.length < 6) {
            throw new AppError("A senha deve ter no minimo 6 caracteres e incluir letras maiúsculas, letras minúsculas e pelo menos um número");
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(password)) {
            throw new AppError(
                "A senha deve ter no minimo 6 caracteres e incluir letras maiúsculas, letras minúsculas e pelo menos um número");
        }

        const hashedPassword = await hash(password,8);
        const createdUser = await this.UserRepository.create({name, email, password: hashedPassword})

    return createdUser;
    }
}
module.exports = CreateUser