import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
import 'wired-elements/lib/wired-search-input.js';

@customElement('wired-search-input-demo')
export class WiredSearchInputDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-search-input {
        margin: 5px 15px;
      }
    </style>
    <wired-search-input placeholder="Search here"></wired-search-input>
    <wired-search-input placeholder="Disabled" disabled></wired-search-input>
    `;
  }
}