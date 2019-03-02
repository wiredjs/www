import { LitElement, html } from 'lit-element';
import 'wired-elements';

export class ToggleExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-toggle {
        margin: 10px;
      }
    
      .custom {
        --wired-toggle-off-color: red;
        --wired-toggle-on-color: green;
      }
    </style>
    <wired-toggle></wired-toggle>
    <wired-toggle class="custom" checked></wired-toggle>
    <wired-toggle disabled></wired-toggle>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-toggle');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].requestUpdate();
      }
    });
  }

}

customElements.define('toggle-example', ToggleExample);