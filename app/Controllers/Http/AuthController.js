'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User = use("App/Models/User")
const Hash = use('Hash')
/**
 * Resourceful controller for interacting with Auths
 */
class AuthController {
    /*
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */

    async login({ params, request, response, auth }) {
        const { username, password } = request.all()
        const [user] = (await User.query().where({ username }).fetch()).toJSON()
        if (user) {
            const passwordValid = await Hash.verify(password.trim(), user.password);
            if (passwordValid) {
                var token = await auth
                    .withRefreshToken()
                    .attempt(username, password)
                delete user.password
                return {
                    status:true,
                    ...token,
                    user
                }
            } else {
                response.status(200)
                    .json({
                        status: false,
                        message: "Invalid Password"
                    })
            }


        } else {
            response.status(200)
                .json({
                    status: false,
                    message: "User not found"
                })
        }

    }

    async register({ request, response }) {
        const { username,
            fullname,
            email,
            password } = request.only(["username", "fullname", "email", "password"])

        try {
            const user = new User()
            user.username = username
            user.fullname = fullname
            user.email = email
            user.password = password
            await user.save()
            return {
                status: true,
                data: user

            }
        } catch (error) {
            response.status(200)
                .json({
                    status: false,
                    message: error.message
                })

        }

    }

}

module.exports = AuthController