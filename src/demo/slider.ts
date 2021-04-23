import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
import 'wired-elements/lib/wired-slider.js';

@customElement('wired-slider-demo')
export class WiredSliderDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-slider {
        margin: 5px 0;
        max-width: 100%;
        box-sizing: border-box;
      }

      .custom {
        width: 200px;
        --wired-slider-knob-color: green;
        --wired-slider-bar-color: blue;
      }
    </style>
    <wired-slider></wired-slider>
    <wired-slider value="40"></wired-slider>
    <wired-slider value="10" min="5" max="15"></wired-slider>
    <wired-slider value="60" disabled></wired-slider>
    <wired-slider class="custom" value="25"></wired-slider>
    `;
  }
}