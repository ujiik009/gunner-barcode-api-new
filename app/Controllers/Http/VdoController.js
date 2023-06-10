'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Vdo = use("App/Models/Vdo")
const uuid = use("uuid")
/**
 * Resourceful controller for interacting with products
 */
class VdoController {
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
            data: await Vdo.query().orderBy("created_at", "asc").fetch()
        })
    }

    async store({ request, response }) {
        try {
            const { url } = request.only(["url"])


            var vdo = new Vdo()
            vdo.id = uuid.v4()
            vdo.url = url


            await vdo.save()

            return {
                status: true,
                message: "Success",
                data: vdo
            }
        } catch (error) {
            console.log(error);
            response.status(502).json({
                status: false,
                message: error.message
            })
        }


    }

    /**
 * Delete a product with id.
 * DELETE products/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
    async destroy({ params, request, response }) {
        try {
            const vdo = await Vdo.find(params.id);
        
            if (!vdo) {
              return response.status(404).json({ message: 'Vdo not found' });
            }
        
            await vdo.delete();
        
            return response.status(204).json({ message: 'Vdo deleted successfully' });
          } catch (error) {
            return response.status(500).json({ message: 'Internal server error' });
          }
    }
}


module.exports = VdoController
