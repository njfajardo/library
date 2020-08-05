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
                <div>
                    <p>Esto fue un cambio para el repo</p>
                    <p>Esto fue un cambio para el repo</p>
                    <div>Raul</div>
                </div>
            </nls-parent>
        `
        return template;
    }

}