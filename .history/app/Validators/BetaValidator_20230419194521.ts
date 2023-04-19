import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BetaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.minLength(8),
      rules.maxLength(255),
      rules.unique({ table: 'waitlists', column: 'email' }),
    ]),
  })

  public messages: CustomMessages = {
    'email.required': 'Une adresse email est requise',
    'email.email': 'Email invalide',
    'email.unique': 'Email déjà inscrite',
    'email.minLength': 'Email trop court',
    'email.maxLength': 'Email trop long',
  }
}
