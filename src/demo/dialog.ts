import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators';
import { WiredDialog } from 'wired-elements/lib/wired-dialog';
import 'wired-elements/lib/wired-button.js';
import 'wired-elements/lib/wired-dialog';

@customElement('wired-dialog-demo')
export class WiredDialogDemo extends LitElement {
  @query('wired-dialog') private dialog?: WiredDialog;
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
    <p style="text-align: center;">
      <wired-button @click="${this.openDialog}">Show dialog</wired-button>
    </p>
    <wired-dialog>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div style="text-align: right; padding: 30px 16px 16px;">
        <wired-button @click="${this.closeDialog}">Close dialog</wired-button>
      </div>
    </wired-dialog>
    `;
  }

  openDialog() {
    this.dialog!.open = true;
  }

  closeDialog() {
    this.dialog!.open = false;
  }
}