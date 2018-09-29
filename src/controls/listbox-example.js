import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/wired-elements/wired-elements.js';

export class ListboxExample extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-listbox {
        margin: 5px;
      }
    
      .customListBox {
        --wired-combo-item-selected-bg: #fff59d;
        --wired-combo-item-hover-bg: #9df59d;
      }
    </style>
    <wired-listbox>
      <wired-item value="one" text="No. one"></wired-item>
      <wired-item value="two" text="No. two"></wired-item>
      <wired-item value="three" text="No. three"></wired-item>
      <wired-item value="four" text="No. four"></wired-item>
    </wired-listbox>
    
    <wired-listbox horizontal class="customListBox" selected="two">
      <wired-item value="one" text="No. one"></wired-item>
      <wired-item value="two" text="No. two"></wired-item>
      <wired-item value="three" text="No. three"></wired-item>
      <wired-item value="four" text="No. four"></wired-item>
    </wired-listbox>
    `;
  }

  onActivate() {
    setTimeout(() => {
      const nodes = this.shadowRoot.querySelectorAll('wired-listbox');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].requestUpdate();
      }
    });
  }

}

customElements.define('listbox-example', ListboxExample);