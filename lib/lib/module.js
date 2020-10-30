"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Declare = (components) => {
    components.map((cp, index) => {
        window.customElements.define(cp.tag, cp.component);
    });
};
exports.default = Declare;
//# sourceMappingURL=module.js.map