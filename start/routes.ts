//AIDE BY ASUNIIA#4610
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'WaitController.index').as('index')

Route.get('/join','WaitController.joinbeta').as('joinbeta')

Route.post('/join', 'WaitController.store').as('store')

Route.get('/quit', 'WaitController.quit').as('quit')

Route.get('/email', 'WaitController.email').as('email')
