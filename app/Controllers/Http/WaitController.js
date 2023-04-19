"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Waitlist_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Waitlist"));
const BetaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/BetaValidator"));
class WaitController {
    async index({ view }) {
        return view.render('app/pages/index');
    }
    async joinbeta({ view }) {
        return view.render('app/pages/joinbeta');
    }
    async store({ request, view }) {
        const payload = await request.validate(BetaValidator_1.default);
        const waitlist = await Waitlist_1.default.create(payload);
        return view.render('app/pages/joinbeta', { email: waitlist.email });
    }
    async quit({ request }) {
        try {
            const uuid = atob(request.qs().rel);
            if (!uuid) {
                return 'La requête est invalide';
            }
            try {
                const waitlist = await Waitlist_1.default.findByOrFail('id', uuid);
                const email = waitlist.email;
                await waitlist.delete();
                return `Votre email ${email} a été desinscrit avec succès de la liste d'attente pour la version Alpha.`;
            }
            catch (error) {
                return 'La requête ne contient pas une jeton valide';
            }
        }
        catch (error) {
            return 'La requête est invalide';
        }
    }
    async email({ request, view }) {
        try {
            const uuid = atob(request.qs().email);
            if (!uuid) {
                return 'La requête est invalide';
            }
            try {
                const waitlist = await Waitlist_1.default.findByOrFail('id', uuid);
                return view.render('emails/success', { email: waitlist.email, rel: btoa(waitlist.id) });
            }
            catch (error) {
                return 'La requête ne contient pas une jeton valide';
            }
        }
        catch (error) {
            return 'La requête est invalide';
        }
    }
}
exports.default = WaitController;
//# sourceMappingURL=WaitController.js.map