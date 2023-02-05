'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User = use("App/Models/User")

/**
 * Resourceful controller for interacting with Auths
 */
class AuthController {
    /*
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */

    // async Login({ params, request, response, auth }) {
    //     const user = await User.find(1)

    //     await auth.generate(user)
    // }

    async register({ request }) {
        const { username,
            fullname,
            email,
            password } = request.only(["username", "fullname", "email", "password"])

        const user = new User()
        user.username = username
        user.fullname = fullname
        user.email = email
        user.password = password
        await user.save()
        return {
            user
        }
    }

}

module.exports = AuthController