import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { Options } from 'roughjs/bin/core';
import { WiredSlider, WiredRadioGroup, WiredCheckbox, WiredCombo } from 'wired-elements';

import 'wired-elements/lib/wired-radio.js';
import 'wired-elements/lib/wired-card.js';
import 'wired-elements/lib/wired-button';
import 'wired-elements/lib/wired-item.js';

@customElement('rough-demo')
export class RoughDemo extends LitElement {
  @query('#slider') private slider?: WiredSlider;
  @query('#fillStyleGroup') private fillStyle?: WiredRadioGroup;
  @query('#strokeShape') private strokeShape?: WiredCheckbox;
  @query('#colorCombo') private colorCombo?: WiredCombo;
  @query('canvas') private canvas?: HTMLCanvasElement;

  private ctx?: CanvasRenderingContext2D;
  private rc?: RoughCanvas;
  private props: Options = {
    roughness: 1,
    fill: 'red',
    strokeWidth: 3,
    stroke: '#000',
    fillStyle: 'hachure'
  };

  render() {
    return html`
    <style>
      * {box-sizing: border-box;}
      [hidden] {display: none !important;}
      .horizontal {display: flex; flex-direction: row;}
      .vertical {display: flex; flex-direction: column;}
      .center {align-items: center;}
      .center-center {justify-content: center; align-items: center;}
      .spaced {justify-content: space-between;}
      .flex {flex: 1;}
      .wrap {flex-wrap: wrap;}
      :host {
        display: block;
        font-size: 16px;
      }
      #container {
        display: flex;
        flex-direction: row;
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
      wired-item {
        font-size: 18px;
      }

      @media (max-width: 600px) {
        #container {
          flex-direction: column-reverse;
        }
      }
    </style>
    <div id="container">
      <div class="flex controls">
        <div style="padding: 5px 0;">
          <wired-checkbox id="strokeShape" checked @change="${this._draw}">Stroke shape</wired-checkbox>
        </div>
        <div>
          <label>Color</label>
          <wired-combo id="colorCombo" selected="red" @selected="${this._draw}">
            <wired-item value="red">Red</wired-item>
            <wired-item value="green">Green</wired-item>
            <wired-item value="blue">Blue</wired-item>
          </wired-combo>
        </div>
        <div>
          <label>Fill Style</label>
          <wired-radio-group id="fillStyleGroup" selected="hachure" @selected="${this._draw}">
            <wired-radio name="hachure">Hachure</wired-radio>
            <wired-radio name="solid">Solid</wired-radio>
          </wired-radio-group>
        </div>
        <div>
          <label>Roughness</label>
          <wired-slider id="slider" value="33" knobradius="15" @change="${this._draw}"></wired-slider>
        </div>
      </div>
      <div>
        <canvas width="280" height="280"></canvas>
      </div>
    </div>
    `;
  }

  firstUpdated() {
    this.ctx = this.canvas!.getContext('2d')!;
    this.rc = new RoughCanvas(this.canvas!);
    this._draw();
  }

  _draw() {
    this.props.roughness = (+this.slider!.value) * 3 / 100;
    this.props.fillStyle = this.fillStyle!.selected;
    this.props.stroke = this.strokeShape!.checked ? '#000' : 'transparent';
    this.props.fill = this.colorCombo!.selected;
    this.ctx!.clearRect(0, 0, 280, 280);
    this.rc!.circle(140, 140, 200, this.props);
    this.style.setProperty('--wired-item-selected-bg', this.props.fill || '');
  }
}