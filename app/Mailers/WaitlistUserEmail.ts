import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import Waitlist from 'App/Models/Waitlist'

export default class WaitlistUserEmail extends BaseMailer {

  constructor(private waitlist: Waitlist) {
    super()
  }

  public prepare(message: MessageContract) {
    message
    .subject('Votre inscription à la Alpha de Hyperion Monitoring à été prise en compte !')
    .from('<noreply@hyperion-monitoring.com>')
    .to(this.waitlist.email)
    .htmlView('emails/success', { email: this.waitlist.email, rel: btoa(this.waitlist.id) })
  }
}
