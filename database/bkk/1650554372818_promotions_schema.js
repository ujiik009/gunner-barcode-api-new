'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PromotionsSchema extends Schema {
  up () {
    this.create('promotions', (table) => {
      table.uuid("id")
      table.string("name",64)
      table.text("detail")
      table.text("images")
      table.float("price")
      table.float("discount")
      table.boolean("is_active").defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('promotions')
  }
}

module.exports = PromotionsSchema
