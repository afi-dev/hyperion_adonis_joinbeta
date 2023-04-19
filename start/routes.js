"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', 'WaitController.index').as('index');
Route_1.default.get('/join', 'WaitController.joinbeta').as('joinbeta');
Route_1.default.post('/join', 'WaitController.store').as('store');
Route_1.default.get('/quit', 'WaitController.quit').as('quit');
Route_1.default.get('/email', 'WaitController.email').as('email');
//# sourceMappingURL=routes.js.map