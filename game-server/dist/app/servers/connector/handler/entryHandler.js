"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    return new Handler(app);
}
exports.default = default_1;
;
class Handler {
    constructor(app) {
        this.app = app;
    }
    ;
    /**
     * New client entry.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next step callback
     * @return {Void}
     */
    entry(msg, session) {
        return __awaiter(this, void 0, void 0, function* () {
            return { code: 200, msg: 'game server is ok.' };
        });
    }
    ;
    /**
     * Publish route for mqtt connector.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next step callback
     * @return {Void}
     */
    publish(msg, session) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = {
                topic: 'publish',
                payload: JSON.stringify({ code: 200, msg: 'publish message is ok.' })
            };
            return result;
        });
    }
    ;
    /**
     * Subscribe route for mqtt connector.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next step callback
     * @return {Void}
     */
    subscribe(msg, session) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = {
                topic: 'subscribe',
                payload: JSON.stringify({ code: 200, msg: 'subscribe message is ok.' })
            };
            return result;
        });
    }
    ;
}
exports.Handler = Handler;
//# sourceMappingURL=entryHandler.js.map