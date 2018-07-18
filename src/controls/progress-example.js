import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class ProgressExample extends LitElement {
  _render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-progress {
        margin: 10px;
      }
    
      .custom {
        --wired-progress-color: rgba(220, 0, 50, 0.1);
        --wired-progress-label-color: green;
        --wired-progress-font-size: 24px;
        width: 300px;
      }
    </style>
    <wired-progress value="25"></wired-progress>
    <wired-progress value="10" min="5" max="15"></wired-progress>
    <wired-progress value="65" percentage></wired-progress>
    <wired-progress class="custom" value="30"></wired-progress>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-progress');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].requestRender();
      }
    });
  }

}

customElements.define('progress-example', ProgressExample);