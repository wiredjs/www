import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'wired-elements/lib/wired-link.js';

@customElement('wired-link-demo')
export class WiredLinkDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
      p {
        max-width: 500px;
        margin: 0 auto;
      }
    </style>
    <p>
      This is a paragraph and here's a link about <wired-link href="https://github.com/wiredjs/wired-elements/tree/master/packages/wired-button">wired-button</wired-link> and well well
      well, what do you know, same link with more elevation <wired-link elevation="3" href="https://github.com/wiredjs/wired-elements/tree/master/packages/wired-button">wired-button
      </wired-link>.
      Here's another link that opens in a new tab about <wired-link href="https://github.com/wiredjs/wired-elements/tree/master/packages/wired-input" target="_blank">wired-input
      </wired-link>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.
    </p>
    `;
  }
}