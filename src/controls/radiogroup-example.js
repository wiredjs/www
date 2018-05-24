import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class RadioGroupExample extends LitElement {
  _render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-radio {
        margin: 0 15px;
      }
    </style>
    <wired-radio-group selected="two">
      <wired-radio name="one" text="Radio One"></wired-radio>
      <wired-radio name="two" text="Radio Two"></wired-radio>
      <wired-radio name="three" text="Radio Three"></wired-radio>
    </wired-radio-group>
    `;
  }
}

customElements.define('radiogroup-example', RadioGroupExample);