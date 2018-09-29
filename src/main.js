import '../node_modules/wired-elements/wired-elements.js';
import { LitElement, html } from '@polymer/lit-element';

export class RoughDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        font-size: 16px;
      }
    
      #container {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }
    
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }
    
      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }
    
      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
    
      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
    
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
    
      canvas {
        display: block;
      }
    
      .controls {
        padding: 10px 15px;
      }
    
      label {
        display: block;
        padding-bottom: 5px;
        padding-top: 8px;
      }
    
      wired-slider {
        display: block;
        width: 100%;
        box-sizing: border-box;
      }
    
      @media (max-width: 600px) {
        #container {
          -ms-flex-direction: column-reverse;
          -webkit-flex-direction: column-reverse;
          flex-direction: column-reverse;
        }
      }
    </style>
    <div id="container">
      <div class="flex controls">
        <div style="padding: 5px 0;">
          <wired-checkbox id="strokeShape" text="Stroke shape" checked @change="${() => this._draw()}"></wired-checkbox>
        </div>
        <div>
          <label>Color</label>
          <wired-combo id="colorCombo" selected="red" @selected="${() => this._draw()}">
            <wired-item value="red" text="Red"></wired-item>
            <wired-item value="green" text="Green"></wired-item>
            <wired-item value="blue" text="Blue"></wired-item>
          </wired-combo>
        </div>
        <div>
          <label>Fill Style</label>
          <wired-radio-group id="fillStyleGroup" selected="hachure" @selected="${() => this._draw()}">
            <wired-radio name="hachure" text="Hachure"></wired-radio>
            <wired-radio name="solid" text="Solid"></wired-radio>
          </wired-radio-group>
        </div>
        <div>
          <label>Roughness</label>
          <wired-slider id="slider" value="33" knobradius="15" @change="${() => this._draw()}"></wired-slider>
        </div>
      </div>
      <div>
        <canvas id="canvas" width="280" height="280"></canvas>
      </div>
    </div>
    `;
  }

  constructor() {
    super();
    this.props = {
      roughness: 1,
      fill: 'red',
      strokeWidth: 3,
      stroke: '#000',
      fillStyle: 'hachure'
    };
  }

  firstUpdated() {
    this.canvas = this.shadowRoot.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.rc = rough.canvas(this.canvas);
    this.slider = this.shadowRoot.getElementById('slider');
    this.fillStyle = this.shadowRoot.getElementById('fillStyleGroup');
    this.strokeShape = this.shadowRoot.getElementById('strokeShape');
    this.colorCombo = this.shadowRoot.getElementById('colorCombo');
    this._draw();
  }

  _draw() {
    this.props.roughness = (+this.slider.value) * 3 / 100;
    this.props.fillStyle = this.fillStyle.selected;
    this.props.stroke = this.strokeShape.checked ? '#000' : 'transparent';
    this.props.fill = this.colorCombo.selected;
    this.ctx.clearRect(0, 0, 280, 280);
    this.rc.circle(140, 140, 200, this.props);
  }
}
customElements.define('rough-demo', RoughDemo);