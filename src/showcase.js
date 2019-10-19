import { LitElement, html } from 'lit-element';
import { controls, getControlByName } from './components';
import { flex } from 'soso/bin/styles/flex';
import { repeat } from 'lit-html/directives/repeat';

import 'soso/bin/components/app-shell';
import 'soso/bin/components/icon-button';
import 'soso/bin/components/app-bar';
import 'soso/bin/components/list';
import 'soso/bin/components/item';
import 'wired-elements';
import './icons.js';
import '@material/mwc-icon';
import '@material/mwc-icon/mwc-icon-font';

import './demo/button';
import './demo/calendar';
import './demo/card';
import './demo/checkbox';
import './demo/combo';
import './demo/dialog';
import './demo/divider';
import './demo/fab';
import './demo/icon-button';
import './demo/image';
import './demo/input';
import './demo/link';
import './demo/listbox';
import './demo/progress';
import './demo/radio';
import './demo/search';
import './demo/slider';
import './demo/spinner';
import './demo/tabs';
import './demo/textarea';
import './demo/toggle';
import './demo/video';

export class ShowcaseApp extends LitElement {
  static get properties() {
    return {
      page: { type: Object }
    };
  }

  static get styles() {
    return flex;
  }

  constructor() {
    super();
    this.page = controls[0];
    this.currentDemo = null;
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        --soso-drawer-overlay-bg: #37474F;
        --soso-app-drawer-border: none;
        --soso-highlight-color: #f0e6f4;
        --soso-highlight-foreground: #37474F;
      }
      soso-app-bar {
        text-align: center;
        letter-spacing: 0.5px;
        background: #37474F;
        text-transform: capitalize;
        color: white;
      }
      a, a:hover, a:visited {
        color: inherit;
        text-decoration: none;
      }
      .drawerTitle {
        text-transform: lowercase;
        color: #f0e6f4;
        font-size: 18px;
      }
      .logo {
        height: 40px;
        width: 40px;
        display: block;
        border-radius: 50%;
        padding: 6px;
        margin: 0 5px;
      }
      #barLogoLink {
        display: none;
      }
      #title {
        text-transform: lowercase;
      }
      soso-list {
        display: block;
        margin: 20px 0;
        color: white;
      }
      
      @media (max-width: 840px) {
        #barLogoLink {
          display: block;
        }
      }
    </style>
    <soso-app-shell>
      <soso-app-bar slot="toolbar">
        <soso-icon-button slot="nav" icon="menu"></soso-icon-button>
        <a id="barLogoLink" href="/" slot="leading">
          <img alt="Wired Elements Logo" class="logo" src="images/logo_400.png">
        </a>
        <div slot="title" id="title">${this.page.name}</div>
        <a slot="actions" target="_blank" href="${this.page.url}">
          <soso-icon-button icon="launch"></soso-icon-button>
        </a>
      </soso-app-bar>
      <nav slot="drawer">
        <div class="horizontal layout center">
          <a href="/">
            <img alt="Wired Elements Logo" class="logo" src="images/logo_400.png">
          </a>
          <a  class="flex" href="/"><div class="drawerTitle">Wired Elements</div></a>
        </div>
        <soso-list .selected="${this.page.name}" @change="${this.onPageSelect}">
          ${repeat(controls, (d) => d.name, (d) => html`<soso-item .value="${d.name}">${d.name}</soso-item>`)}
        </soso-list>
      </nav>
      <div id="main" slot="main">
      </div>
    </soso-app-shell>
    `;
  }

  onPageSelect(e) {
    const control = getControlByName(e.detail.selected);
    if (control) {
      this.page = control;
    }
  }

  updated() {
    this.refreshView();
  }

  refreshView() {
    if (this.page) {
      const tagName = `${this.page.name}-demo`;
      if (this.currentDemo && this.currentDemo.tagName.toLowerCase() === tagName) {
        return;
      }
      const main = this.shadowRoot.querySelector('#main');
      if (main) {
        if (this.currentDemo) {
          main.removeChild(this.currentDemo);
        }
        this.currentDemo = document.createElement(tagName);
        main.appendChild(this.currentDemo);
      }
    }
  }
}
customElements.define('showcase-app', ShowcaseApp);