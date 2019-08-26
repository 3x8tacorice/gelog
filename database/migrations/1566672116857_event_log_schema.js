'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventLogSchema extends Schema {
  up () {
    this.create('event_logs', (table) => {
      table.increments()
      table.integer('event_id').unsigned()
      table.integer('user_id').unsigned()
      table.string('comment')
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at')

      // foreign key
      table.foreign('event_id').references('id').inTable('events')
      table.foreign('user_id').references('id').inTable('users')
    })
  }

  down () {
    this.drop('event_logs')
  }
}

module.exports = EventLogSchema
