import { render } from "lit-html";

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
]

export interface Inputs {
    name: string;
    initValue: any;
}

export default class NlsComponent extends HTMLElement {
    static observedProps = new Map;
    static tag: string;
    public properties: any;
    protected initHook() { }
    protected print(): any { }
    static inputs;
    constructor() {
        super();
    }

    readonly renderRoot!: Element|DocumentFragment;

    protected connectedCallback() {
        this.init()
        // NlsComponent.attr = this.attributes;
        const self = this;
    }

    static get observedAttributes() {

        return this.inputs;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
        if(newValue !== oldValue && oldValue) {
            this[name] = newValue;
            this.reRenderComponent();
        }
    }
    
    protected init(){
        this.initHook();
        this.createProperties();
        const tpl = this.print();       
        // (this as {
        //     renderRoot: Element|DocumentFragment;
        // }).renderRoot = this.createRenderRoot();
        render(tpl, this);
    }

    // protected createRenderRoot(): Element|ShadowRoot {
    //     return this.attachShadow({mode: 'closed'});
    // }    

    protected updateComponent(newValue: any, oldValue: any) {
        this.reRenderComponent()
    }

    protected reRenderComponent(){
        // console.log('re')
        render(
            this.print(),
            this, 
            {eventContext: this}
        )
    }

    protected createProperties() {
        const props = this;
        // Sacar también de aquí todas las propiedades que seas funciones
        const propKeys = [
            ...Object.getOwnPropertyNames(props),
            ...(typeof Object.getOwnPropertySymbols === 'function') ?
                Object.getOwnPropertySymbols(props) :
                []
        ].filter(
            (item) => {
                return PROPERTIES_CLASS.indexOf(item as unknown as string) < 0
            }
        );
        for (let p of propKeys) {
            console.log(p)
            let prop = this[p];
            Object.defineProperty(this, p, {
                get: function() { 
                    return prop;
                },
                set(newValue) {
                    prop = newValue;
                    this.updateComponent(newValue, p)
                },
                configurable: true,
                enumerable: true,
            });
        }
    }
}

export const selector  = (tag) => {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			static tag = tag;
		}
	}
}
