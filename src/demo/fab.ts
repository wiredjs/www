import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
import 'wired-elements/lib/wired-fab';

@customElement('wired-fab-demo')
export class WiredFabDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-fab {
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
        --wired-fab-bg-color: pink;
      }
    </style>
    <wired-fab>
      <mwc-icon>favorite</mwc-icon>
    </wired-fab>
    <wired-fab class="red">
      <mwc-icon>favorite</mwc-icon>
    </wired-fab>
    <wired-fab class="pinkbg">
      <mwc-icon>favorite</mwc-icon>
    </wired-fab>
    <wired-fab class="big">
      <mwc-icon>favorite</mwc-icon>
    </wired-fab>
    <wired-fab disabled>
      <mwc-icon>favorite</mwc-icon>
    </wired-fab>
    `;
  }
}