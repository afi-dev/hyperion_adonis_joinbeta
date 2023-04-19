"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Mail");
class WaitlistUserEmail extends Mail_1.BaseMailer {
    constructor(waitlist) {
        super();
        this.waitlist = waitlist;
    }
    prepare(message) {
        message
            .subject('Votre inscription à la Alpha de Hyperion Monitoring à été prise en compte !')
            .from('<noreply@hyperion-monitoring.com>')
            .to(this.waitlist.email)
            .htmlView('emails/success', { email: this.waitlist.email, rel: btoa(this.waitlist.id) });
    }
}
exports.default = WaitlistUserEmail;
//# sourceMappingURL=WaitlistUserEmail.js.map