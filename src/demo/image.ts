import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'wired-elements/lib/wired-image.js';

@customElement('wired-image-demo')
export class WiredImageDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-image {
        margin: 20px;
      }

      .red {
        color: purple;
      }

      .sized {
        max-width: 400px;
        max-height: 400px;
      }
    </style>
    <wired-image src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>
    <wired-image elevation="4" class="red" src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>
    <wired-image src="https://www.gstatic.com/webp/gallery/4.jpg"></wired-image>
    <wired-image class="sized" elevation="5" src="https://www.gstatic.com/webp/gallery/4.jpg"></wired-image>
    `;
  }
}