'use strict'

const Database = use('Database')
const Type = use('App/Models/Type')

class TypeController {
  async index ({ request, response }) {
    const types = Type.query()
      .with('image')
      .fetch()

    return types
  }

  async store ({ request }) {
    const data = request.only(['name', 'price_factor', 'file_id'])

    const trx = await Database.beginTransaction()

    const type = await Type.create(data)

    const dataSizes = request.only(['sizes'])

    type.sizes().attach([dataSizes])

    await trx.commit()

    return type
  }
}

module.exports = TypeController
