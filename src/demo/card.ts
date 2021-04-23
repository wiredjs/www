import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
import 'wired-elements/lib/wired-card';

@customElement('wired-card-demo')
export class WiredCardDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }

      wired-card {
        max-width: 100%;
      }

      .card-grid {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(2, 1fr);
      }

      h4 {
        font-family: 'Gloria Hallelujah', sans-serif;
      }
    </style>
    <div class="card-grid">
      <wired-card>
        <h4>Card 1</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </wired-card>
      <wired-card elevation="5">
        <h4>Card 2</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </wired-card>
      <wired-card elevation="4" fill="darkred" style="color: lightyellow;">
        <h4>Colored Card</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </wired-card>
    </div>
    `;
  }
}