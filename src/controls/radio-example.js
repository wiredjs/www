import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class RadioExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-radio {
        margin: 0 15px;
      }
    
      .cradio {
        color: blue;
        --wired-radio-icon-color: red;
      }
    </style>
    <wired-radio text="Radio One"></wired-radio>
    <wired-radio text="Radio Two" checked></wired-radio>
    <wired-radio text="Radio disabled" disabled></wired-radio>
    <wired-radio text="Custom radio" class="cradio"></wired-radio>
    `;
  }
}

customElements.define('radio-example', RadioExample);