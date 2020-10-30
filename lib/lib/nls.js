"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selector = void 0;
const lit_html_1 = require("lit-html");
const PROPERTIES_CLASS = [
    'connectedCallback',
    'tag',
    'state',
    'properties',
    'updateComponent',
    'renderRoot',
    'init',
    'print',
    'initHook'
];
let NlsComponent = /** @class */ (() => {
    class NlsComponent extends HTMLElement {
        constructor() {
            super();
        }
        initHook() { }
        print() { }
        connectedCallback() {
            this.init();
        }
        static get observedAttributes() {
            return this.inputs;
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (newValue !== oldValue && oldValue) {
                this[name] = newValue;
                this.reRenderComponent();
            }
        }
        init() {
            this.setInnerChildrens(super.childNodes);
            this.initHook();
            this.createProperties();
            const tpl = this.print();
            // console.log(super.innerHTML )
            // (this as {
            //     renderRoot: Element|DocumentFragment;
            // }).renderRoot = this.createRenderRoot();
            lit_html_1.render(tpl, this);
        }
        // protected createRenderRoot(): Element|ShadowRoot {
        //     return this.attachShadow({mode: 'closed'});
        // }    
        updateComponent(newValue, oldValue) {
            this.reRenderComponent();
        }
        setInnerChildrens(nodes) {
            nodes.forEach(node => {
                if (!node.childNodes.length) {
                    let parent = node.parentNode;
                    node.parentNode.removeChild(node);
                    if (!parent.children.length) {
                        parent.parentNode.removeChild(parent);
                    }
                }
            });
            if (nodes.length > 1)
                throw new Error('Todos los elementos hijos del componente deben estar contenidos por un único elemento HTML');
            this.childrens = nodes[0];
        }
        get innerChildrens() {
            return this.childrens;
        }
        reRenderComponent() {
            // console.log('re')
            lit_html_1.render(this.print(), this, { eventContext: this });
        }
        createProperties() {
            const props = this;
            // Sacar también de aquí todas las propiedades que seas funciones
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ].filter((item) => {
                return PROPERTIES_CLASS.indexOf(item) < 0;
            });
            for (let p of propKeys) {
                let prop = this[p];
                Object.defineProperty(this, p, {
                    get: function () {
                        return prop;
                    },
                    set(newValue) {
                        prop = newValue;
                        this.updateComponent(newValue, p);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
        }
    }
    NlsComponent.observedProps = new Map;
    return NlsComponent;
})();
exports.default = NlsComponent;
exports.selector = (tag) => {
    return function (constructor) {
        var _a;
        return _a = class extends constructor {
            },
            _a.tag = tag,
            _a;
    };
};
//# sourceMappingURL=nls.js.map