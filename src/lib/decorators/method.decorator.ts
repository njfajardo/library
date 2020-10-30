export default function Method() {
    return function (target: HTMLElement, propertyKey: string) { 
        Object.defineProperty(target, propertyKey, {
            value: async function(this: HTMLElement) {
                const val =  this.getAttribute(propertyKey);
                return val;
            }
        }); 
    }
}