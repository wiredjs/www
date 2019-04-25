import { LitElement, html } from 'lit-element';

export class ComboExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }

      wired-combo {
        margin: 10px;
        --wired-item-selected-bg: darkblue;
      }
    </style>
    <wired-combo selected="two">
      <wired-item value="one">Number one</wired-item>
      <wired-item value="two">Number two</wired-item>
      <wired-item value="three">Number three</wired-item>
      <wired-item value="four">Number four</wired-item>
    </wired-combo>
    <wired-combo selected="one" disabled>
      <wired-item value="one">Disabled</wired-item>
      <wired-item value="two">Number two</wired-item>
    </wired-combo>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-combo');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].requestUpdate();
      }
    });
  }

}

customElements.define('combo-example', ComboExample);