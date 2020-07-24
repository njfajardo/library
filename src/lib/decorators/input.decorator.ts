export default function Input() {
    return function(target: HTMLElement, propertyKey: string) { 
      let value : string = '';
      const getter = function(this: HTMLElement) {
        return this.getAttribute(propertyKey);
      };
      const setter = function(this: HTMLElement, newVal: string) {
        value = newVal;
      }; 
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
      }); 
    }
}