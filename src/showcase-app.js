import { LitElement, html } from 'lit-element';
import { controls } from './controls/controls';
import { iconMap } from 'soso/bin/components/icon-map';
import { repeat } from 'lit-html/directives/repeat';
import 'wired-elements';

import 'soso/bin/components/app-shell';
import 'soso/bin/components/app-bar';
import 'soso/bin/components/icon-button';
import 'soso/bin/components/selector';
import 'soso/bin/components/list';
import 'soso/bin/components/item';

import './controls/button-example';
import './controls/card-example';
import './controls/checkbox-example';
import './controls/combo-example';
import './controls/iconbutton-example';
import './controls/input-example';
import './controls/listbox-example';
import './controls/progress-example';
import './controls/radiogroup-example';
import './controls/slider-example';
import './controls/textarea-example';
import './controls/toggle-example';
import './controls/fab-example';
import './controls/spinner-example';
import './controls/tabs-example';

iconMap.define({
  menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
  launch: 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'
})

export class ShowcaseApp extends LitElement {
  static get properties() {
    return {
      page: { type: Object }
    };
  }

  constructor() {
    super();
    this.page = controls[0];
  }

  render() {
    const selected = this.page ? this.page.name : '';
    return html`
    <style>
      :host {
        display: block;
        --soso-drawer-overlay-bg: #37474F;
        --soso-app-drawer-width: 235px;
        --soso-highlight-color: #f0e6f4;
        --soso-highlight-foreground: #37474F;
      }
      #title {
        text-align: center;
      }
      soso-app-bar {
        background: #37474F;
        color: white;
      }
      #logo {
        height: 40px;
        width: 40px;
        display: block;
        border-radius: 50%;
        padding: 6px;
        margin: 0 5px;
      }
      a, a:hover, a:visited {
        color: inherit;
        text-decoration: none;
      }
      .drawerTitle {
        text-transform: lowercase;
        color: #f0e6f4;
      }
      soso-list {
        display: block;
        margin: 20px 0;
      }

      @media (max-width: 960px) {
        #toolbarTitle {
          display: none;
        }
      }
    </style>
    <soso-app-shell id="shell">
      <soso-app-bar slot="toolbar">
        <soso-icon-button slot="nav" icon="menu"></soso-icon-button>
        <a href="/" slot="leading">
          <img alt="Wired Elements Logo" id="logo" src="images/logo_400.png">
        </a>
        <a id="toolbarTitle" href="/" slot="leading"><div class="drawerTitle" slot="title">Wired-Elements</div></a>
        <div slot="title" id="title">${this.page ? this.page.label : ''}</div>
        <a slot="actions" target="_blank" href="${this.page ? this.page.url : ''}">
          <soso-icon-button icon="launch"></soso-icon-button>
        </a>
      </soso-app-bar>

      <soso-app-bar slot="drawerHeader">
        <a href="/" slot="leading">
          <img alt="Wired Elements Logo" id="logo" src="images/logo_400.png">
        </a>
        <a href="/" slot="leading"><div class="drawerTitle" slot="title">Wired-Elements</div></a>
      </soso-app-bar>

      <div slot="drawer" style="color: white;">
        <soso-list .selected="${selected}" @change="${this.onPageSelect}">
        ${repeat(controls, (d) => d.name, (d) => html`<soso-item .value="${d.name}">${d.label}</soso-item>`)}
        </soso-list>
      </div>

      <div slot="main">
        <soso-selector .selected="${selected}">
          <button-example name="button"></button-example>
          <card-example name="card"></card-example>
          <checkbox-example name="checkbox"></checkbox-example>
          <combo-example name="combo"></combo-example>
          <fab-example name="fab"></fab-example>
          <iconbutton-example name="iconbutton"></iconbutton-example>
          <input-example name="input"></input-example>
          <listbox-example name="listbox"></listbox-example>
          <progress-example name="progress"></progress-example>
          <radiogroup-example name="radio"></radiogroup-example>
          <slider-example name="slider"></slider-example>
          <spinner-example name="spinner"></spinner-example>
          <tabs-example name="tabs"></tabs-example>
          <textarea-example name="textarea"></textarea-example>
          <toggle-example name="toggle"></toggle-example>
        </soso-selector>
      </div>
    </soso-app-shell>
    `;
  }

  pageByName(name) {
    for (let i = 0; i < controls.length; i++) {
      if (controls[i].name === name) {
        return controls[i];
      }
    }
    return controls[0];
  }

  onPageSelect(e) {
    this.page = this.pageByName(e.detail.selected);
    const shell = this.shadowRoot.getElementById('shell');
    shell.drawerOpen = false;
  }
}
window.customElements.define('showcase-app', ShowcaseApp);