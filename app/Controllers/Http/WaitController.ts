import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Waitlist from 'App/Models/Waitlist'
import BetaValidator from 'App/Validators/BetaValidator'

export default class WaitController {

  public async index({ view }: HttpContextContract) {
    return view.render('app/pages/index')
  }

  public async joinbeta({ view }: HttpContextContract) {
    return view.render('app/pages/joinbeta')
  }

  public async store({ request, view }: HttpContextContract) {
    const payload = await request.validate(BetaValidator)
    const waitlist = await Waitlist.create(payload)
    return view.render('app/pages/joinbeta', { email: waitlist.email })
  }

  public async quit({ request }: HttpContextContract) {
    try {
      const uuid = atob(request.qs().rel)
      if (!uuid) {
        return 'La requête est invalide'
      }
      try {
        const waitlist = await Waitlist.findByOrFail('id', uuid)
        const email = waitlist.email
        await waitlist.delete()
        return `Votre email ${email} a été desinscrit avec succès de la liste d'attente pour la version Alpha.`
      } catch (error) {
        return 'La requête ne contient pas une jeton valide'
      }
    } catch (error) { return 'La requête est invalide' }
  }


  public async email({ request, view }: HttpContextContract) {
    try {
      const uuid = atob(request.qs().email)
      if (!uuid) {
        return 'La requête est invalide'
      }
      try {
        const waitlist = await Waitlist.findByOrFail('id', uuid)
        return view.render('emails/success', { email: waitlist.email, rel: btoa(waitlist.id) })
      } catch (error) {
        return 'La requête ne contient pas une jeton valide'
      }
    } catch (error) { return 'La requête est invalide' }
  }
}
