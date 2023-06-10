'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductOrderSchema extends Schema {
  up () {
    this.create('product_orders', (table) => {
      table.uuid("id").primary()
      table.text("delivery_address", 13)
      table.uuid("user_id").references("id").inTable("users")
      table.timestamps()
    })
  }

  down () {
    this.drop('product_orders')
  }
}

module.exports = ProductOrderSchema
