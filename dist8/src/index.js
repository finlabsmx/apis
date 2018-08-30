"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.FinLabsLendingAppV1 = application_1.FinLabsLendingAppV1;
async function main(options) {
    const app = new application_1.FinLabsLendingAppV1(options);
    await app.boot();
    await app.start();
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map