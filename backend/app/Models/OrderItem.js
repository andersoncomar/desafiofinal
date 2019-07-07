'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }

  type () {
    return this.belongsTo('App/Models/Type')
  }

  size () {
    return this.belongsTo('App/Models/Size')
  }
}

module.exports = OrderItem
