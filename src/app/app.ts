import AppTemplate from './app.html';
import {html, render, TemplateResult} from 'lit-html';
import { Component } from '../lib/module';
import NlsComponent, { selector, Inputs } from '../lib/nls';
// import Print, { Component } from '../lib/render';

@selector('nls-root')
export default class App extends NlsComponent implements Component {

    print(): TemplateResult {
        const template = html`
            <nls-parent>
                <p>Esto fue un cambio para el repo</p>
            </nls-parent>
        `
        return template;
    }

}