'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StickerDesignSchema extends Schema {
  up() {
    this.create('sticker_designs', (table) => {
      table.uuid("id").primary()
      table.string("color", 20)
      table.integer("qty")
      table.string("sticker_size")
      table.string("sticker_texture")
      table.string("sticker_type")
      table.text("sticker_base64")
      table.boolean("is_active").defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('sticker_designs')
  }
}

module.exports = StickerDesignSchema
