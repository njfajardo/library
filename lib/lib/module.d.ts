import { TemplateResult } from "lit-html";
export interface Component {
    print(): TemplateResult;
}
export interface ImportComponents {
    tag: string;
    component: Constructable<Component>;
}
interface Constructable<T> {
    new (...args: any): T;
}
declare const Declare: (components: ImportComponents[]) => void;
export default Declare;
//# sourceMappingURL=module.d.ts.map