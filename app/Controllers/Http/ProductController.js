'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Product = use("App/Models/Product")
/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params: { page, limit }, response, view }) {
    
    response.json({
      status: true,
      data: await Product.query().paginate(page, limit)
    })
  }

  /**
  * Show a list of all products filter by brand.
  * post products
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async get_product_by_brand({ request, response }) {
    console.log("get_product_by_brand working");
    const { brand } = request.only(["brand"])
    console.log(brand);
    response.json({
      status: true,
      data: await Product.query().where("brand", "=", brand).fetch()
    })
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    response.json({
      status: true,
      data: await Product.find(params.id)
    })
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const {
      product_name,
      brand,
      model,
      detail,
      category,
      warranty,
      img_link,
      best_seller,
      price,
      discount
    } = request.only([
      "product_name",
      "brand",
      "model",
      "detail",
      "category",
      "warranty",
      "img_link",
      "best_seller",
      "price",
      "discount"
    ]);

    const product = await Product.find(id);
    if (!product) {
      return { error: "Product not found" };
    }

    product.product_name = product_name ?? product.product_name;
    product.brand = brand ?? product.brand;
    product.model = model ?? product.model;
    product.detail = detail ?? product.detail;
    product.category = category ?? product.category;
    product.warranty = warranty ?? product.warranty;
    product.img_link = img_link ?? product.img_link;
    product.best_seller = best_seller ?? product.best_seller;
    product.price = price ?? product.price;
    product.discount = discount ?? product.discount;

    await product.save();

    return { message: "Product updated successfully", product };
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
  }

  /**
   * 
   * @param {*} param0 
   */
  async best_seller({ params, request, response }) {
    response.json({
      status: true,
      data: await Product.query()
        .where("best_seller", true)
        .fetch()
    })
  }

  async categories({ request, response }) {
    response.json({
      status: true,
      data: await Product.query()
        .select("brand")
        .groupBy("brand")
        .count("brand as counting")

    })
  }
}

module.exports = ProductController
