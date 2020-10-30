"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selector = exports.Method = exports.Input = exports.Declare = void 0;
const module_1 = __importDefault(require("./lib/module"));
exports.Declare = module_1.default;
const nls_1 = __importStar(require("./lib/nls"));
Object.defineProperty(exports, "selector", { enumerable: true, get: function () { return nls_1.selector; } });
const input_decorator_1 = __importDefault(require("./lib/decorators/input.decorator"));
exports.Input = input_decorator_1.default;
const Method_decorator_1 = __importDefault(require("./lib/decorators/Method.decorator"));
exports.Method = Method_decorator_1.default;
exports.default = nls_1.default;
//# sourceMappingURL=index.js.map