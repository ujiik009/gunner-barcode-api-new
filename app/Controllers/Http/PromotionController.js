'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Promotion = use("App/Models/Promotion")
/**
 * Resourceful controller for interacting with products
 */
class PromotionController {
    /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async index({ request, response, view }) {
        response.json({
            status: true,
            data: await Promotion.query().where("is_active",true).fetch()
        })
    }
}


module.exports = PromotionController
