'use strict'
const Event = use('App/Models/Event')
const EventLog = use('App/Models/EventLog')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with eventlogs
 */
class EventLogController {
  /**
   * Show a list of all eventlogs.
   * GET eventlogs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    console.log('call index event logs')
    const logs = await EventLog.all()

    return response.json(logs)
  }

  /**
   * Render a form to be used for creating a new eventlog.
   * GET eventlogs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new eventlog.
   * POST eventlogs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const event_id = params.id
    const event = await Event.find(event_id)
    const form = request.only(['comment', 'user_id'])
    const event_log = new EventLog()
    event_log.event_id = event_id
    if (form.comment) {
      event_log.comment = form.comment
    } else {
      event_log.comment = event.default_comment
    }
    event_log.user_id = form.user_id
    await event_log.save()
    return response.json(event_log)
  }

  /**
   * Display a single eventlog.
   * GET eventlogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const log = await EventLog.find(params.id)
    const event = await log.event().fetch()
    return response.json({log, event})
  }

  /**
   * Render a form to update an existing eventlog.
   * GET eventlogs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update eventlog details.
   * PUT or PATCH eventlogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a eventlog with id.
   * DELETE eventlogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = EventLogController
