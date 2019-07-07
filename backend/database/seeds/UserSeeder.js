'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const user = await User.create({
      username: 'Anderson Comar',
      email: 'adm@gmail.com',
      password: '123',
      adm: true
    })

    return user
  }
}

module.exports = UserSeeder
