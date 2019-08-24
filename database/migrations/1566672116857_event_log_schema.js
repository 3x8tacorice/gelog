'use strict'
const knex = use('knex')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventLogSchema extends Schema {
  up () {
    this.create('event_logs', (table) => {
      table.increments()
      table.integer('event_id').unsigned()
      table.integer('user_id').unsigned()
      table.string('comment')
      table.timestamps(true, true)

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
