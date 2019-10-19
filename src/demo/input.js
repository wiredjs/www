import { LitElement, html } from 'lit-element';

export class WiredInputDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-input {
        margin: 5px 15px;
      }
    </style>
    <wired-input placeholder="Enter name"></wired-input>
    <wired-input type="password" placeholder="Password"></wired-input>
    <wired-input placeholder="Disabled" disabled></wired-input>
    `;
  }
}
customElements.define('wired-input-demo', WiredInputDemo);