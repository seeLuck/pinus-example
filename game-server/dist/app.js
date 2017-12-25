"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pinus_1 = require("pinus");
const preload_1 = require("./preload");
/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload_1.preload();
/**
 * Init app for client.
 */
var app = pinus_1.pinus.createApp();
app.set('name', 'pinus-example');
// app configuration
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        heartbeat: 3,
        useDict: true,
        useProtobuf: true
    });
});
// start app
app.start();
//# sourceMappingURL=app.js.map