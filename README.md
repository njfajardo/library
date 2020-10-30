# NlsComponents

This is a web components library with the basic tools to create your own components. With NlsComponents all of your component will be reactives by a low cost.

## Install

```
npm install nls-component -s
```

## Example

```ts
import NlsComponent, {selector} from 'nls-component';
import {html, render, TemplateResult} from 'lit-html';
 
@selector('home-component')
export default class Home extends NlsComponent {
    my_property: string = 'Hello, World!';
 
    
    print(): TemplateResult {
       return html`<h1 >${this.my_property}</h1>`;
    };
}


```
We use lit-html, from Polymer Project, to render or re-render the components any time when some property has change.

## Module

In your index.ts in the main folder of your project, you need to declare all of your components

```ts
import { Declare } from "nls-component";
import Home from "./app/home.component";

Declare([
    {tag: Home.tag, component: Home}
]);
```

## Decorators 

We provide two decorator for your inputs:

```ts
import NlsComponent, {selector, Input, Method} from 'nls-component';
import {html, render, TemplateResult} from 'lit-html';
 
@selector('child-component')
export default class ChildComponent extends NlsComponent {
    // First, you'll need declare all of your inputs with the static property inputs
    static inputs = ['my_property_from_parent', 'my_function_from_parent' ]
    /*With @Input, you can pass strings from the parents to the children*/
    @Input() my_property_from_parent: string;
    /*With @Method, you can pass functios, objects or arrays from the parents to the children*/
    @Method() my_function_from_parent: any[];
    
    print(): TemplateResult {
       return html`<h1>${this.my_property_from_parent}</h1>`;
    };
}    

```
Enjoy!