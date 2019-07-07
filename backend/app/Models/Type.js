'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
  sizes () {
    return this.belongsToMany('App/Models/Size').pivotModel(
      'App/Models/TypeSize'
    )
  }

  image () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Type
