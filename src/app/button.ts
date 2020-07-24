import AppTemplate from './app.html';
import {html, render, TemplateResult} from 'lit-html';
import { Component } from '../lib/module';
import NlsComponent, { selector } from '../lib/nls';
import Input from '../lib/decorators/input.decorator';
// import Print, { Component } from '../lib/render';
@selector('nls-button')
export default class Button extends NlsComponent implements Component {
    hola: string;
    static inputs = ['nombre', 'apellido'];
    @Input() nombre: string;
    constructor() {
        super();
        this.print = this.print.bind(this);
        this.alerta = this.alerta.bind(this);
        this.hola = 'Click';
    }


    alerta() {
        // // alert('Hola, Mundo');
        this.hola = 'Otra cosa';
    }

    print(): TemplateResult {
        return html`<button @click="${this.alerta}" type="button">${this.nombre}</button>`;
    }
}