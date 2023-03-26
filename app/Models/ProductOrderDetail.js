'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductOrderDetail extends Model {
    order(){
        return this.belongsTo("App/Models/ProductOrder")
    }

    product(){
        return this.belongsTo("App/Models/Product")
    }
}

module.exports = ProductOrderDetail
