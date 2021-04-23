import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
import 'wired-elements/lib/wired-icon-button.js';

@customElement('wired-icon-button-demo')
export class WiredIconButtonDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-icon-button {
        margin: 0 10px;
      }

      .big {
        --wired-icon-size: 40px;
        padding: 16px;
      }

      .red {
        color: red;
      }

      .pinkbg {
        color: red;
        --wired-icon-bg-color: pink;
      }
    </style>
    <wired-icon-button>
      <mwc-icon>favorite</mwc-icon>
    </wired-icon-button>
    <wired-icon-button class="red">
      <mwc-icon>favorite</mwc-icon>
    </wired-icon-button>
    <wired-icon-button class="pinkbg">
      <mwc-icon>favorite</mwc-icon>
    </wired-icon-button>
    <wired-icon-button class="big">
      <mwc-icon>favorite</mwc-icon>
    </wired-icon-button>
    <wired-icon-button disabled>
      <mwc-icon>favorite</mwc-icon>
    </wired-icon-button>
    `;
  }
}