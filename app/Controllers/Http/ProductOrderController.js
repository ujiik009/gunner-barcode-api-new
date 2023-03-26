'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const ProductOrder = use("App/Models/ProductOrder")

const uuid = use("uuid")
/**
 * Resourceful controller for interacting with productorders
 */
class ProductOrderController {

  async index({ params: { page, limit }, response }) {

    response.json({
      status: true,
      data: await ProductOrder
        .query()
        .with('orderDetail.product')
        .with('user')
        .paginate(page, limit)
    })

  }

  /**
   * Create/save a new productorder.
   * POST productorders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    try {
      const { user_id, delivery_address, items } = request.all()
      const product_order = new ProductOrder()
      product_order.id = uuid.v4()
      product_order.user_id = user_id
      product_order.delivery_address = delivery_address
      await product_order.save()
      var order = await ProductOrder.find(product_order.id)
      var orderDetail = await order.orderDetail().createMany(items)
      return orderDetail
    } catch (error) {
      console.log(error);
      throw error
    }

  }
}

module.exports = ProductOrderController
