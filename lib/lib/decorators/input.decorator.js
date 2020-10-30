"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Input() {
    return function (target, propertyKey) {
        let value = '';
        const getter = function () {
            return this.getAttribute(propertyKey);
        };
        const setter = function (newVal) {
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
exports.default = Input;
//# sourceMappingURL=input.decorator.js.map