import { LitElement, html } from 'lit-element';

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
customElements.define('wired-search-input-demo', WiredSearchInputDemo);