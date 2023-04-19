import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { randomUUID } from 'crypto'
import WaitlistUserEmail from 'App/Mailers/WaitlistUserEmail'

export default class Waitlist extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @beforeCreate()
  public static async generateUUID(waitlist: Waitlist) {
    waitlist.id = randomUUID()
    new WaitlistUserEmail(waitlist).sendLater()
  }
}