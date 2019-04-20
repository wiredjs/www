import { LitElement, html } from 'lit-element';

export class FabExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-fab {
        margin: 0 10px;
      }
    
      .big {
        --wired-icon-size: 40px;
        padding: 16px;
      }
    
      .red {
        color: red;
      }
    
      .pinkbg {
        color: red;
        --wired-fab-bg-color: pink;
      }
    </style>
    <wired-fab>favorite</wired-fab>
    <wired-fab class="red">favorite</wired-fab>
    <wired-fab class="pinkbg">favorite</wired-fab>
    <wired-fab class="big">favorite</wired-fab>
    <wired-fab disabled>favorite</wired-fab>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-fab');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].requestUpdate();
      }
    });
  }

}

customElements.define('fab-example', FabExample);