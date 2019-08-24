'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const User = use('App/Models/User')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('', 'UserController.index')
  Route.post('', 'UserController.store')
  Route.get(':id', 'UserController.show')
  Route.delete(':id', 'UserController.destroy')
  Route.put(':id', 'UserController.update')
}).prefix('users')

Route.group(() => {
  Route.get('', 'EventController.index')
  Route.post('', 'EventController.store')
  Route.get(':id', 'EventController.show')
  Route.delete(':id', 'EventController.destroy')
  Route.put(':id', 'EventController.update')
  Route.post(':id/logs', 'EventLogController.store')
}).prefix('events')

Route.group(() => {
  Route.get('', 'EventLogController.index')
  Route.get(':id', 'EventLogController.show')
  Route.delete(':id', 'EventLogController.destroy')
  Route.put(':id', 'EventLogController.update')
}).prefix('logs')


