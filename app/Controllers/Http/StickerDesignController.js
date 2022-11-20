'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const StickerDesign = use("App/Models/StickerDesign")
const uuid = use("uuid")
/**
 * Resourceful controller for interacting with stickerdesigns
 */
class StickerDesignController {
  /**
   * Show a list of all stickerdesigns.
   * GET stickerdesigns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Create/save a new stickerdesign.
   * POST stickerdesigns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const { color,
        qty,
        sticker_size,
        sticker_texture,
        sticker_type,
        sticker_url } = request.only([
          "color",
          "qty",
          "sticker_size",
          "sticker_texture",
          "sticker_type",
          "sticker_url"]
        )

      var sticker_base64 = sticker_url.replace(/^data:image\/png;base64,/, "");

      var sticker_design = new StickerDesign()

      sticker_design.id = uuid.v4()
      sticker_design.color = color
      sticker_design.qty = qty
      sticker_design.sticker_size = sticker_size
      sticker_design.sticker_texture = sticker_texture
      sticker_design.sticker_type = sticker_type
      sticker_design.sticker_base64 = sticker_base64
      await sticker_design.save()
      return {
        status: true,
        message: "Submit Stricker Design Success",
        data: sticker_design
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
   * Display a single stickerdesign.
   * GET stickerdesigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }



  /**
   * Update stickerdesign details.
   * PUT or PATCH stickerdesigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a stickerdesign with id.
   * DELETE stickerdesigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = StickerDesignController
