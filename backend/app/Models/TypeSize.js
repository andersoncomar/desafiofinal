'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TypeSize extends Model {
  type () {
    return this.belongsTo('App/Models/Type')
  }

  size () {
    return this.belongsTo('App/Models/Size')
  }
}

module.exports = TypeSize
