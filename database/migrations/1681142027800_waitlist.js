"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Waitlist extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'waitlists';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.string('id').primary();
            table.string('email').notNullable();
            table.timestamp('created_at').notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Waitlist;
//# sourceMappingURL=1681142027800_waitlist.js.map