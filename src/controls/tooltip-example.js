import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class TooltipExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      .inline {
        display: inline-block;
      }
    
      .container {
        padding: 50px 0;
      }
    
      button {
        margin: 0 25px;
      }
    
      .colored {
        --wired-tooltip-border-color: red;
        --wired-tooltip-background: rgba(200, 200, 0, 0.2);
        color: blue;
      }
    </style>
    <div class="container">
      <div class="inline">
        <button>Hover over</button>
        <wired-tooltip text="Below"></wired-tooltip>
      </div>
      <button id="btn">Hover over</button>
      <wired-tooltip position="top" for="btn" text="Above"></wired-tooltip>
      <button id="lb">Hover over</button>
      <wired-tooltip position="left" for="lb" text="Left"></wired-tooltip>
      <button id="rb">Hover over</button>
      <wired-tooltip position="right" for="rb" text="Right"></wired-tooltip>
    </div>
    
    <div class="container">
      <div class="inline">
        <button>Hover over</button>
        <wired-tooltip class="colored" text="Fancy tooltip"></wired-tooltip>
      </div>
    </div>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-tooltip');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i]._layout();
      }
    });
  }

}

customElements.define('tooltip-example', TooltipExample);