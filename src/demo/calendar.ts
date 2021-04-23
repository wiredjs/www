import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
import 'wired-elements/lib/wired-calendar';

@customElement('wired-calendar-demo')
export class WiredCalendarDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
        font-family: 'Gloria Hallelujah', sans-serif;
      }
    
      .item_wrapper {
        margin-bottom: 30px;
        display: inline-block;
      }

      .custom {
        --wired-calendar-bg: yellow;
        --wired-calendar-color: red;
        --wired-calendar-selected-color: black;
        --wired-calendar-dimmed-color: brown;
      }
    </style>
    <!-- Minimal working calendar -->
    <div class="item_wrapper">
      <div>Minimal</div>
      <wired-calendar></wired-calendar>
    </div>

    <!-- Calendar with some parameters -->
    <div class="item_wrapper">
      <div>"fr" locale</div>
      <wired-calendar id="calendar2" elevation="1" firstdate="Apr 15, 2019" lastdate="Jul 15, 2019"
        selected="Jul 4, 2019" locale="fr" initials>
      </wired-calendar>
    </div>

    <!-- Calendar with custom style and some parameters -->
    <div class="item_wrapper">
      <div>"de" locale</div>
      <wired-calendar id="calendar3" class="custom" firstdate="Apr 15, 2019" locale="de" initials>
      </wired-calendar>
    </div>
    `;
  }
}