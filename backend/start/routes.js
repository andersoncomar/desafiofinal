'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.get('files', 'FileController.index')
Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('userrule', 'UserController.rule')

  Route.post('files', 'FileController.store')

  Route.resource('products', 'ProductController').apiOnly()
  Route.resource('products.types', 'ProductTypeController').apiOnly()

  Route.resource('types', 'TypeController').apiOnly()
  Route.resource('types.sizes', 'TypeSizeController').apiOnly()

  Route.resource('sizes', 'SizeController').apiOnly()

  Route.resource('orders', 'OrderController')
    .apiOnly()
    .validator(new Map([[['orders.store'], 'Order']]))

  Route.resource('userorders', 'UserOrderController').apiOnly()
}).middleware(['auth'])
