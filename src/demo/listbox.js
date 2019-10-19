import { LitElement, html } from 'lit-element';

export class WiredListboxDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      wired-listbox {
        margin: 5px;
        --wired-item-selected-bg: darkblue;
      }

      .customListBox {
        --wired-item-selected-bg: pink;
        --wired-item-selected-color: darkred;
      }
    </style>
    <wired-listbox selected="one">
      <wired-item value="one">No. one</wired-item>
      <wired-item value="two">No. two</wired-item>
      <wired-item value="three">No. three</wired-item>
      <wired-item value="four">No. four</wired-item>
    </wired-listbox>

    <wired-listbox horizontal class="customListBox" selected="two">
      <wired-item value="one">No. one</wired-item>
      <wired-item value="two">No. two</wired-item>
      <wired-item value="three">No. three</wired-item>
      <wired-item value="four">No. four</wired-item>
    </wired-listbox>
    `;
  }
}
customElements.define('wired-listbox-demo', WiredListboxDemo);