import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class ComboExample extends LitElement {
  _render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-combo {
        margin: 10px;
      }
    </style>
    <wired-combo selected="two">
      <wired-item value="one" text="Number one"></wired-item>
      <wired-item value="two" text="Number two"></wired-item>
      <wired-item value="three" text="Number three"></wired-item>
      <wired-item value="four" text="Number four"></wired-item>
    </wired-combo>
    <wired-combo selected="one" disabled>
      <wired-item value="one" text="Disabled"></wired-item>
      <wired-item value="two" text="Number two"></wired-item>
    </wired-combo>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-combo');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i]._requestRender();
      }
    });
  }

}

customElements.define('combo-example', ComboExample);