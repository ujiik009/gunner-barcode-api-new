'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductOrder extends Model {
    user() {
        return this.belongsTo("App/Models/User", "user_id", "id")
    }

    orderDetail() {
        return this.hasMany("App/Models/ProductOrderDetail", "id","product_order_id")
    }
}

module.exports = ProductOrder
