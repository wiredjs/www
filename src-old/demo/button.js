import { LitElement, html } from 'lit-element';

export class WiredButtonDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      #styled {
         background: yellow;
         color: red;
      }
    </style>
    <p>
      <wired-button id="btn1">Submit</wired-button>
    </p>
    <p>
      <wired-button id="btn2">Hello, world!</wired-button>
    </p>
    <p>
      <wired-button elevation="5" id="btn2">Hello, world!</wired-button>
    </p>
    <p>
      <wired-button disabled id="btn1">Submit</wired-button>
    </p>
    <p>
      <wired-button id="styled" onclick="alert('NO!');">Do not press</wired-button>
    </p>
    `;
  }
}
customElements.define('wired-button-demo', WiredButtonDemo);