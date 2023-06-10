'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VdoSchema extends Schema {
  up () {
    this.create('vdos', (table) => {
      table.uuid("id").primary()
      table.text("url")
      table.timestamps()
    })
  }

  down () {
    this.drop('vdos')
  }
}

module.exports = VdoSchema
