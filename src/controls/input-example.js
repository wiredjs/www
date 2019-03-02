import { LitElement, html } from 'lit-element';
import 'wired-elements';

export class InputExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-input {
        margin: 5px 15px;
      }
    </style>
    <wired-input placeholder="Enter name"></wired-input>
    <wired-input type="password" placeholder="Password"></wired-input>
    <wired-input placeholder="Disabled" disabled></wired-input>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-input');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].requestUpdate();
      }
    });
  }

}

customElements.define('input-example', InputExample);