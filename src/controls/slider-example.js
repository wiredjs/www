import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class SliderExample extends LitElement {
  _render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-slider {
        margin: 5px 0;
      }
    
      .custom {
        width: 200px;
        --wired-slider-knob-color: green;
        --wired-slider-knob-zero-color: red;
        --wired-slider-bar-color: blue;
      }
    </style>
    <wired-slider></wired-slider>
    <wired-slider value="40"></wired-slider>
    <wired-slider knobradius="15" value="10" min="5" max="15"></wired-slider>
    <wired-slider value="60" disabled></wired-slider>
    <wired-slider class="custom" value="25"></wired-slider>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-slider');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i]._firstRendered();
      }
    });
  }

}

customElements.define('slider-example', SliderExample);