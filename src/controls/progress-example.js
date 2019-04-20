import { LitElement, html } from 'lit-element';
import 'wired-elements';

export class ProgressExample extends LitElement {
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
      }
    </style>
    <wired-progress value="25"></wired-progress>
    <wired-progress value="65" percentage></wired-progress>
    <wired-progress class="custom" value="30"></wired-progress>

    <section style="margin-top: 16px;">
      <wired-progress id="progress"></wired-progress>
      <div style="margin-top: 16px;">
        <wired-button id="btns">Start</wired-button>
        <wired-button id="btnr">Stop</wired-button>
      </div>
    </section>
    `;
  }

  firstUpdated() {
    const prog = this.shadowRoot.getElementById('progress')
    let timer = 0;
    this.shadowRoot.getElementById('btns').addEventListener('click', () => {
      if (timer) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(() => {
        if (prog.value >= 100) {
          prog.value = 0;
        } else {
          prog.value = prog.value + 1;
        }
      }, 100);
    });
    this.shadowRoot.getElementById('btnr').addEventListener('click', () => {
      if (timer) {
        window.clearInterval(timer);
        timer = 0;
      }
      prog.value = 0;
    });
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-progress, wired-button');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].box = undefined;
        nodes[i].requestUpdate();
      }
    });
  }

}

customElements.define('progress-example', ProgressExample);