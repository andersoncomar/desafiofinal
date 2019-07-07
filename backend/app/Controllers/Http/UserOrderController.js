'use strict'

const Order = use('App/Models/Order')

class UserOrderController {
  async index ({ auth }) {
    const orders = await Order.query()
      .has('items', '>', 0)
      .with('items', builder => {
        builder
          .with('product')
          .with('type', builder => {
            builder.with('image')
          })
          .with('size')
      })
      .with('user', builder => {
        builder.setVisible(['name'])
      })
      .where('user_id', auth.user.id)
      .orderBy('created_at', 'desc')
      .fetch()

    return orders
  }
}

module.exports = UserOrderController
