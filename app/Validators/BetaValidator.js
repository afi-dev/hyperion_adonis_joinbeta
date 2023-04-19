"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class BetaValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.email(),
                Validator_1.rules.minLength(8),
                Validator_1.rules.maxLength(255),
                Validator_1.rules.unique({ table: 'waitlists', column: 'email' }),
            ]),
        });
        this.messages = {
            'email.required': 'Une adresse email est requise',
            'email.email': 'Email invalide',
            'email.unique': 'Email déjà inscrite',
            'email.minLength': 'Email trop court',
            'email.maxLength': 'Email trop long',
        };
    }
}
exports.default = BetaValidator;
//# sourceMappingURL=BetaValidator.js.map