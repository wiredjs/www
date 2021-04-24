import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'wired-elements/lib/wired-textarea.js';

@customElement('wired-textarea-demo')
export class WiredTextareaDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
        font-size: 16px;
      }
    
      wired-textarea {
        margin: 10px 0;
        box-sizing: border-box;
        max-width: 100%;
      }
    </style>
    <wired-textarea placeholder="Enter text"></wired-textarea>
    <wired-textarea placeholder="Enter text 6 rows" rows="6"></wired-textarea>
    <wired-textarea disabled placeholder="disabled" rows="2"></wired-textarea>
    `;
  }
}