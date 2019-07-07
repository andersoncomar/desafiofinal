'use strict'

const Ws = use('Ws')

const Order = use('App/Models/Order')
const OrderItem = use('App/Models/OrderItem')

class OrderController {
  async index () {
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
        builder.setVisible(['username'])
      })
      .orderBy('created_at', 'desc')
      .fetch()

    return orders
  }

  async store ({ request, auth }) {
    const data = request.only([
      'observation',
      'street',
      'number',
      'neighborhood',
      'zip',
      'total'
    ])

    const order = await Order.create({ ...data, user_id: auth.user.id })

    const dataItems = request.only(['items'])

    await Promise.all(
      dataItems.items.map(async item => {
        await OrderItem.create({ ...item, order_id: order.id })
      })
    )

    const socket = Ws.getChannel('orders').topic('orders')

    if (socket) socket.broadcast('new:order')

    return order
  }
}

module.exports = OrderController
