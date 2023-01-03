'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClaimProductSchema extends Schema {
  up () {
    this.create('claim_products', (table) => {
      table.uuid("id").primary()
      table.string("id_card", 13)
      table.string("fullname")
      table.string("product_name")
      table.string("brand")
      table.string("buy_date")
      table.string("warranty_date")
      table.text("topic_issue")
      table.text("content_issue")
      table.text("remark")
      table.string("phone_contact")
      table.string("email")
      table.timestamps()
    })
  }

  down () {
    this.drop('claim_products')
  }
}

module.exports = ClaimProductSchema
