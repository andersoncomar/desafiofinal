'use strict'

const User = use('App/Models/User')

class UserController {
  async rule ({ request }) {
    const { email } = request.only(['email'])

    const data = await User.query().where('email', email).first()

    return data
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
