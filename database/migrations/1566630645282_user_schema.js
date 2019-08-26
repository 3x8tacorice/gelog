'use strict'
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name')
      table.string('email')
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
