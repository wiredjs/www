import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class TextareaExample extends LitElement {
  _render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-textarea {
        margin: 10px;
      }
    </style>
    <wired-textarea placeholder="Enter text" rows="3"></wired-textarea>
    <wired-textarea disabled placeholder="disabled" rows="2"></wired-textarea>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-textarea');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i]._requestRender();
      }
    });
  }

}

customElements.define('textarea-example', TextareaExample);