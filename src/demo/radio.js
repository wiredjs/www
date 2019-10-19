import { LitElement, html } from 'lit-element';

export class WiredRadioDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
        font-family: 'Gloria Hallelujah', sans-serif;
      }
    
      wired-radio {
        margin: 0 15px;
        opacity: 1;
      }

      .custom {
        color: blue;
        --wired-radio-icon-color: red;
      }
    </style>
    <wired-radio-group id="rg" selected="two">
      <wired-radio name="one">One</wired-radio>
      <wired-radio name="two">Two</wired-radio>
      <wired-radio name="three">Three</wired-radio>
      <wired-radio class="custom" name="four">Four</wired-radio>
    </wired-radio-group>
    `;
  }
}
customElements.define('wired-radio-demo', WiredRadioDemo);