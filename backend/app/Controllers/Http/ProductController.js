'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index ({ request }) {
    const products = await Product.query()
      .with('image')
      .fetch()

    return products
  }

  async store ({ request }) {
    const data = request.only([
      'name',
      'description',
      'preparation_time',
      'file_id'
    ])

    const product = await Product.create(data)

    const dataTypes = request.only(['types'])

    product.types().attach(dataTypes)

    return product
  }
}

module.exports = ProductController
