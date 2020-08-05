import { render, html } from "lit-html";

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
    private childrens: any;
    constructor() {
        super();
    }

    readonly renderRoot!: Element|DocumentFragment;

    protected connectedCallback() {
        this.init()
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
        this.innerChildrens = super.childNodes;
        this.initHook();
        this.createProperties();
        const tpl = this.print();  
        // console.log(super.innerHTML )
        
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

    set innerChildrens(nodes: NodeListOf<ChildNode>)  {
        nodes.forEach(node => {
            if (!node.childNodes.length) {
              let parent = node.parentNode;
              node.parentNode.removeChild(node);
              if (!parent.children.length) {
                parent.parentNode.removeChild(parent)
              }
            }
        });
        if (nodes.length > 1) throw new Error('Todos los elementos hijos del componente deben estar contenidos por un único elemento HTML');
        this.childrens = nodes[0]
    }

    get innerChildrens() {
        return this.childrens;
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
