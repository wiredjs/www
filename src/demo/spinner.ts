import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators';
import { WiredSpinner } from 'wired-elements/lib/wired-spinner';
import 'wired-elements/lib/wired-spinner.js';
import 'wired-elements/lib/wired-button';

@customElement('wired-spinner-demo')
export class WiredSpinnerDemo extends LitElement {
  @query('#sp') private sp?: WiredSpinner;

  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-spinner {
        margin: 10px;
      }

      .custom {
        color: red;
      }
    </style>
    <wired-spinner id="sp"></wired-spinner>
    <wired-spinner class="custom" spinning duration="1000"></wired-spinner>

    <div style="margin-top: 30px;">
      <wired-button @click="${this.toggle}">Toggle</wired-button>
    </div>
    `;
  }

  toggle() {
    this.sp!.spinning = !this.sp!.spinning;
  }
}