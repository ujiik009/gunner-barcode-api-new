'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductOrderDetailSchema extends Schema {
  up () {
    this.create('product_order_details', (table) => {
      table.uuid("id").primary()
      table.uuid("product_id").references("id").inTable("products")
      table.uuid("product_order_id").references("id").inTable("product_orders")
      table.integer("qty")
      table.timestamps()
    })
  }

  down () {
    this.drop('product_order_details')
  }
}

module.exports = ProductOrderDetailSchema
