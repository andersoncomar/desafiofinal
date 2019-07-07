'use strict'

const Type = use('App/Models/Type')

class TypeSizeController {
  async index ({ params, request }) {
    const type = await Type.findOrFail(params.types_id)

    const sizes = await type
      .sizes()
      .with('image')
      .orderBy('base_price', 'desc')
      .fetch()

    console.log('sizes', sizes)

    return sizes
  }
}

module.exports = TypeSizeController
