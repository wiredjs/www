import { LitElement, html } from 'lit';
import { customElement, query, property } from 'lit/decorators';
import { controls, getControlByName } from './components';
import { SososAppShell } from 'soso/bin/components/app-shell';

import 'soso/bin/components/app-shell';
import 'soso/bin/components/icon-button';
import 'soso/bin/components/app-bar';
import 'soso/bin/components/list';
import 'soso/bin/components/item';
import './icons.js';
import '@material/mwc-icon';
import 'wired-elements';

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

@customElement('showcase-app')
export class ShowcaseApp extends LitElement {
  @property() page = controls[0];

  @query('soso-app-shell') private appShell?: SososAppShell;
  @query('#main') private main?: HTMLDivElement;

  private currentDemo?: HTMLElement;

  render() {
    return html`
    <style>
      * {box-sizing: border-box;}
      [hidden] {display: none !important;}
      .horizontal {display: flex; flex-direction: row;}
      .vertical {display: flex; flex-direction: column;}
      .center {align-items: center;}
      .center-center {justify-content: center; align-items: center;}
      .spaced {justify-content: space-between;}
      .flex {flex: 1;}
      .wrap {flex-wrap: wrap;}
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
        <div class="horizontal center">
          <a href="/">
            <img alt="Wired Elements Logo" class="logo" src="images/logo_400.png">
          </a>
          <a  class="flex" href="/"><div class="drawerTitle">Wired Elements</div></a>
        </div>
        <soso-list .selected="${this.page.name}" @change="${this.onPageSelect}">
          ${controls.map((d) => html`<soso-item .value="${d.name}">${d.name}</soso-item>`)}
        </soso-list>
      </nav>
      <div id="main" slot="main">
      </div>
    </soso-app-shell>
    `;
  }

  onPageSelect(e: CustomEvent) {
    const control = getControlByName(e.detail.selected);
    if (control) {
      this.page = control;
    }
    if (this.appShell) {
      this.appShell.drawerOpen = false;
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
      if (this.main) {
        if (this.currentDemo) {
          this.main.removeChild(this.currentDemo);
        }
        this.currentDemo = document.createElement(tagName);
        this.main.appendChild(this.currentDemo);
      }
    }
  }
}