import { TemplateResult, render } from "lit-html";


export interface Component {
    print(): TemplateResult;
}

export interface ImportComponents {
    tag: string;
    component: Constructable<Component>;
}

interface Constructable<T> {
    new(...args: any) : T;
}

const Declare = (components: ImportComponents[]) => {
    components.map((cp, index) => {
        window.customElements.define(cp.tag, cp.component as unknown as CustomElementConstructor);
    })
}

export default Declare;