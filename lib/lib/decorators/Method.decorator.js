"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Method() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            value: async function () {
                const val = this.getAttribute(propertyKey);
                return val;
            }
        });
    };
}
exports.default = Method;
//# sourceMappingURL=Method.decorator.js.map