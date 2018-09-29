import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class ButtonExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-button {
        margin: 5px 10px;
      }
    </style>
    <wired-button>Click Me</wired-button>
    <wired-button disabled>Disabled</wired-button>
    <wired-button elevation="3">Elevation</wired-button>
    `;
  }

}

customElements.define('button-example', ButtonExample);