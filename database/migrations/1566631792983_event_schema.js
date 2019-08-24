'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.string('default_comment')
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
