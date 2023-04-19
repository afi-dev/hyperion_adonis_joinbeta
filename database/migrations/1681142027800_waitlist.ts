import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Waitlist extends BaseSchema {
    protected tableName = 'waitlists'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.string('id').primary()
            table.string('email').notNullable()
            table.timestamp('created_at').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
