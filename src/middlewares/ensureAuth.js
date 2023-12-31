const {verify} = require("jsonwebtoken")
const AppError = require("../utils/App.error")
const authConfig = require("../configs/auth");

function ensureAuth(request, response, next) {
    const authHeader = request.headers.authorization;
    if(!authHeader) {throw new AppError("token de autenticação  invalido.")}
    const [, token] = authHeader.split(" ")
    try{
        const {sub: user_id} = verify(token, authConfig.jwt.secret)
        request.user = {
            id:Number(user_id)
            }
    return next()
    } catch{
        throw new AppError("token invalido.")
    }
}

module.exports = ensureAuth