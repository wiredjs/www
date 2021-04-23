import { LitElement, html } from 'lit-element';

export class WiredToggleDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-toggle {
        margin: 10px;
      }

      .custom {
        --wired-toggle-off-color: red;
        --wired-toggle-on-color: green;
      }
    </style>
    <wired-toggle></wired-toggle>
    <wired-toggle class="custom" checked></wired-toggle>
    <wired-toggle disabled></wired-toggle>
    `;
  }
}
customElements.define('wired-toggle-demo', WiredToggleDemo);