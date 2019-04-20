import { LitElement, html } from 'lit-element';
import 'wired-elements';

export class RadioGroupExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
      wired-radio {
        margin: 5px;
      }
    </style>
    <wired-radio-group selected="two">
      <wired-radio name="one">Radio One</wired-radio>
      <wired-radio name="two">Radio Two</wired-radio>
      <wired-radio name="three">Radio Three</wired-radio>
    </wired-radio-group>
    `;
  }
}

customElements.define('radiogroup-example', RadioGroupExample);