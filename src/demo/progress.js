import { LitElement, html } from 'lit-element';

export class WiredProgressDemo extends LitElement {
  constructor() {
    super();
    this.timer = 0;
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }

      wired-progress {
        margin: 10px;
      }

      wired-button {
        margin: 0 10px;
      }

      .custom {
        --wired-progress-color: rgba(220, 0, 50, 0.1);
        --wired-progress-label-color: green;
        width: 300px;
        height: 2em;
      }
    </style>
    <wired-progress value="25"></wired-progress>
    <wired-progress value="65" percentage></wired-progress>
    <wired-progress class="custom" value="30"></wired-progress>
    <section style="margin-top: 16px;">
      <wired-progress id="progress"></wired-progress>
      <div style="margin-top: 16px;">
        <wired-button id="btns" @click="${this.start}">Start</wired-button>
        <wired-button id="btnr" @click="${this.stop}">Stop</wired-button>
      </div>
    </section>
    `;
  }

  start() {
    const prog = this.shadowRoot.getElementById('progress');
    if (this.timer) {
      window.clearInterval(this.timer);
    }
    this.timer = window.setInterval(() => {
      if (prog.value >= 100) {
        prog.value = 0;
      } else {
        prog.value = prog.value + 1;
      }
    }, 100);
  }

  stop() {
    const prog = this.shadowRoot.getElementById('progress');
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = 0;
    }
    prog.value = 0;
  }
}
customElements.define('wired-progress-demo', WiredProgressDemo);