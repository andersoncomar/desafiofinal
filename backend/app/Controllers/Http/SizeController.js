'use strict'

const Size = use('App/Models/Size')

class SizeController {
  async index ({ request, response }) {
    const sizes = Size.query()
      .with('image')
      .fetch()

    return sizes
  }

  async store ({ request }) {
    const data = request.all()

    const size = await Size.create(data)

    return size
  }
}

module.exports = SizeController
