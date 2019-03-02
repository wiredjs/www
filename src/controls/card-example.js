import { LitElement, html } from 'lit-element';
import 'wired-elements';

export class CardExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-card {
        max-width: 500px;
        padding: 10px;
        margin: 5px 0;
      }
    </style>
    <wired-card>
      <h4>Elevation: 1 (default)</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </wired-card>
    <br/>
    <wired-card elevation="2">
      <h4>Elevation: 2</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </wired-card>
    <br/>
    <wired-card elevation="5">
      <h4>Elevation: 5 (max)</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </wired-card>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const cards = this.shadowRoot.querySelectorAll('wired-card');
      for (let i = 0; i < cards.length; i++) {
        cards[i].requestUpdate();
      }
    });
  }

}

customElements.define('card-example', CardExample);