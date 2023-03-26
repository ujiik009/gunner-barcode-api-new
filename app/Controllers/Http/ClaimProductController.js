'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ClaimProduct = use("App/Models/ClaimProduct")
const uuid = use("uuid")

/**
 * Resourceful controller for interacting with claimproducts
 */
class ClaimProductController {
  /**
   * Show a list of all claimproducts.
   * GET claimproducts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params: { page, limit }, request, response, view }) {
    response.json({
      status: true,
      data: await ClaimProduct.query().paginate(page, limit)
    })
  }

  /**
   * Render a form to be used for creating a new claimproduct.
   * GET claimproducts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new claimproduct.
   * POST claimproducts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const { color,
        id_card,
        fullname,
        product_name,
        brand,
        buy_date,
        warranty_date,
        topic_issue,
        content_issue,
        remark,
        phone_contact,
        email } = request.all()


      var claim_product = new ClaimProduct()

      claim_product.id = uuid.v4()
      claim_product.id_card = id_card
      claim_product.fullname = fullname
      claim_product.product_name = product_name
      claim_product.brand = brand
      claim_product.buy_date = buy_date
      claim_product.warranty_date = warranty_date
      claim_product.topic_issue = topic_issue
      claim_product.content_issue = content_issue
      claim_product.remark = remark
      claim_product.phone_contact = phone_contact
      claim_product.email = email

      await claim_product.save()
      return {
        status: true,
        message: "Success",
        data: claim_product
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
   * Display a single claimproduct.
   * GET claimproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing claimproduct.
   * GET claimproducts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update claimproduct details.
   * PUT or PATCH claimproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a claimproduct with id.
   * DELETE claimproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = ClaimProductController
