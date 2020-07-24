import AppTemplate from './app.html';
import {html, render, TemplateResult} from 'lit-html';
import { Component } from '../lib/module';
import NlsComponent, { selector, Inputs } from '../lib/nls';
// import Print, { Component } from '../lib/render';

@selector('nls-parent')
export default class Parent extends NlsComponent implements Component {
    papa: string = 'Nelson'; 
    hola: string = 'Hola, mundo';
    constructor() {
        super();
        // this.print = this.print.bind(this);
        // this.alerta = this.alerta.bind(this);
    }

    alerta = () => {
        this.papa = 'Pepito';
    }

    print(): TemplateResult {
        const template = html`
            <h1>${this.hola}</h1>
            <button @click="${this.alerta}" type="button">Cambiar nombre</button>
            <input type="text"/>
            <nls-button nombre="${this.papa}"></nls-button>
            <nls-button></nls-button>
        `
        return template;
    }

}