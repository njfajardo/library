export interface Inputs {
    name: string;
    initValue: any;
}
export default class NlsComponent extends HTMLElement {
    static observedProps: Map<any, any>;
    static tag: string;
    properties: any;
    protected initHook(): void;
    protected print(): any;
    static inputs: any;
    private childrens;
    constructor();
    readonly renderRoot: Element | DocumentFragment;
    protected connectedCallback(): void;
    static get observedAttributes(): any;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    protected init(): void;
    protected updateComponent(newValue: any, oldValue: any): void;
    setInnerChildrens(nodes: NodeListOf<ChildNode>): void;
    get innerChildrens(): any;
    protected reRenderComponent(): void;
    protected createProperties(): void;
}
export declare const selector: (tag: any) => <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {};
    tag: any;
} & T;
//# sourceMappingURL=nls.d.ts.map