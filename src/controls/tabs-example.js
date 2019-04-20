import { LitElement, html } from 'lit-element';

export class TabsExample extends LitElement {
  static get properties() {
    return {
      selected: { type: String }
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
      wired-tabs {
        max-width: 600px;
        margin: 0 auto;
      }
    </style>
    <wired-tabs .selected="${this.selected}">
      <wired-tab name="One">
        <h4>Card 1</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </wired-tab>
      <wired-tab name="Two">
        <h4>Card 2</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </wired-tab>
      <wired-tab name="Three">
        <h4>Card 3</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </wired-tab>
      <wired-tab name="Four">
        <h4>Card 4</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </wired-tab>
    </wired-tabs>
    `;
  }

  onActivate() {
    setTimeout(() => {
      this.selected = 'Three';
      const nodes = this.shadowRoot.querySelectorAll('wired-tabs, wired-tab');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].requestUpdate();
      }
    });
  }
}

customElements.define('tabs-example', TabsExample);