import { LitElement, html } from 'lit-element';

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
    <wired-checkbox>Checkbox One</wired-checkbox>
    <wired-checkbox checked>Checkbox Two</wired-checkbox>
    <wired-checkbox disabled>Disabled checkbox</wired-checkbox>
    <wired-checkbox class="custom">Styled checkbox</wired-checkbox>
    `;
  }

}

customElements.define('checkbox-example', CheckboxExample);