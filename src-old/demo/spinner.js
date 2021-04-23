import { LitElement, html } from 'lit-element';

export class WiredSpinnerDemo extends LitElement {
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
    const sp = this.shadowRoot.getElementById('sp');
    sp.spinning = !sp.spinning;
  }
}
customElements.define('wired-spinner-demo', WiredSpinnerDemo);