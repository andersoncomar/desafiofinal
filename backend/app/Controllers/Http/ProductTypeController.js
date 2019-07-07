'use strict'

const Product = use('App/Models/Product')
const ProductType = use('App/Models/ProductType')

class ProductTypeController {
  async index ({ params, request }) {
    const product = await Product.findOrFail(params.products_id)

    const types = await product
      .types()
      .with('image')
      .orderBy('name', 'asc')
      .fetch()

    return types
  }

  async store ({ params, request }) {
    const type = request.all()

    const productType = await ProductType.create({
      ...type,
      product_id: params.products_id
    })

    return productType
  }
}

module.exports = ProductTypeController
