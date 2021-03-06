'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  image () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Size
