import { LitElement, html } from 'lit-element';
import 'wired-elements';

export class TextareaExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
        box-sizing: border-box;
      }
    
      wired-textarea {
        margin: 10px 0;
        box-sizing: border-box;
        max-width: 100%;
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
        nodes[i].requestUpdate();
      }
    });
  }

}

customElements.define('textarea-example', TextareaExample);