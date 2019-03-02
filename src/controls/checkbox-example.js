import { LitElement, html } from 'lit-element';
import 'wired-elements';

export class CheckboxExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-checkbox {
        margin: 0 15px;
      }
    
      .custom {
        color: blue;
        --wired-checkbox-icon-color: red;
      }
    </style>
    <wired-checkbox text="Checkbox One"></wired-checkbox>
    <wired-checkbox text="Checkbox Two" checked></wired-checkbox>
    <wired-checkbox text="Checkbox disabled" disabled></wired-checkbox>
    <wired-checkbox text="Custom checkbox" class="custom"></wired-checkbox>
    `;
  }

}

customElements.define('checkbox-example', CheckboxExample);