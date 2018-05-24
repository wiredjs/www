import { LitElement, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import { controls } from './controls/controls';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import './controls/button-example';
import './controls/card-example';
import './controls/checkbox-example';
import './controls/combo-example';
import './controls/iconbutton-example';
import './controls/input-example';
import './controls/listbox-example';
import './controls/progress-example';
import './controls/radio-example';
import './controls/radiogroup-example';
import './controls/slider-example';
import './controls/textarea-example';
import './controls/toggle-example';
import './controls/tooltip-example';

export class ShowcaseApp extends LitElement {
  _render({ page }) {
    return html`
    <style>
      :host {
        display: block;
      }
    
      .menu-btn {
        background: none;
        border: none;
        fill: #000;
        cursor: pointer;
        height: 44px;
        width: 44px;
        margin: 0 10px 0 -10px;
      }
    
      .menu-btn2 {
        background: none;
        border: none;
        fill: #000;
        cursor: pointer;
        height: 44px;
        width: 44px;
        margin: 0 -10px 0 10px;
      }
    
      .menu-btn2 mwc-icon,
      .menu-btn mwc-icon {
        pointer-events: none;
      }
    
      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 20px 0;
        color: #fff;
        background: #37474F;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    
      .navItem {
        padding: 5px 16px;
        cursor: pointer;
      }
    
      .navItem.selected {
        box-shadow: 8px 0 #f0e6f4 inset;
      }
    
      .navItem:hover {
        box-shadow: 8px 0 #f0e6f4 inset;
      }
    
      #logo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 0 16px;
        display: block;
        margin-bottom: 20px;
      }
    
      a,
      a:hover,
      a:visited {
        color: inherit;
        text-decoration: none;
        outline: none;
      }
    
      app-toolbar {
        background: #f0e6f4;
        color: #000;
        font-size: 24px;
      }
    
      .hidden {
        display: none !important;
      }
    
      @media (min-width: 640px) {
        .menu-btn {
          display: none;
        }
      }
    
      @media (max-width: 600px) {
        app-toolbar {
          font-size: 20px;
        }
      }
    </style>
    <app-drawer-layout id="drawerLayout">
      <app-drawer id="drawer" slot="drawer">
        <nav class="drawer-list">
          <div>
            <a href="/">
              <img alt="Logo" id="logo" src="images/logo_400.png">
            </a>
          </div>
          ${repeat(controls, (i) => i.name, (i, index) => html`
          <div class="navItem" data-name$="${i.name}" on-click="${() => this._navigate(i)}">${i.label}</div>
          `)}
        </nav>
      </app-drawer>
      <app-header-layout>
        <app-header slot="header" reveals>
          <app-toolbar>
            <button class="menu-btn" title="Menu" drawer-toggle>
              <mwc-icon>menu</mwc-icon>
            </button>
            <div main-title>${page ? page.label : ''}</div>
            <a href$="${page ? page.url : ''}" target="_blank" rel="noopener">
              <button class="menu-btn2" title="Code">
                <mwc-icon>launch</mwc-icon>
              </button>
            </a>
          </app-toolbar>
        </app-header>
        <main>
          <button-example class="button page"></button-example>
          <card-example class="card page"></card-example>
          <checkbox-example class="checkbox page"></checkbox-example>
          <combo-example class="combo page"></combo-example>
          <iconbutton-example class="iconbutton page"></iconbutton-example>
          <input-example class="input page"></input-example>
          <listbox-example class="listbox page"></listbox-example>
          <progress-example class="progress page"></progress-example>
          <radio-example class="radio page"></radio-example>
          <radiogroup-example class="radiogroup page"></radiogroup-example>
          <slider-example class="slider page"></slider-example>
          <textarea-example class="textarea page"></textarea-example>
          <toggle-example class="toggle page"></toggle-example>
          <tooltip-example class="tooltip page"></tooltip-example>
        </main>
      </app-header-layout>
    </app-drawer-layout>
    `;
  };

  static get properties() {
    return {
      page: Object
    };
  }

  _navigate(item) {
    const narrow = this.shadowRoot.getElementById('drawerLayout').narrow;
    if (narrow) {
      this.shadowRoot.getElementById('drawer').toggle();
    }
    this._setPage(item);
  }

  _firstRendered() {
    this._setPage(controls[0]);
  }

  _setPage(item) {
    this.page = item;
    const nodes = this.shadowRoot.querySelectorAll('.navItem');
    if (nodes) {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (n.dataset.name === item.name) {
          n.classList.add('selected');
        } else {
          n.classList.remove('selected');
        }
      }
    }
    const pages = this.shadowRoot.querySelectorAll('.page');
    if (pages) {
      for (let i = 0; i < pages.length; i++) {
        const p = pages[i];
        if (p.classList.contains(item.name)) {
          p.classList.remove('hidden');
          if (p.onActivate) {
            setTimeout(() => p.onActivate());
          }
        } else {
          p.classList.add('hidden');
        }
      }
    }
  }

  _toggleDrawer() {
    this.shadowRoot.getElementById('drawer').toggle();
  }
}

window.customElements.define('showcase-app', ShowcaseApp);