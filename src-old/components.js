export const controls = [
  { name: 'wired-button', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-button' },
  { name: 'wired-calendar', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-calendar' },
  { name: 'wired-card', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-card' },
  { name: 'wired-checkbox', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-checkbox' },
  { name: 'wired-combo', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-combo' },
  { name: 'wired-dialog', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-dialog' },
  { name: 'wired-divider', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-divider' },
  { name: 'wired-fab', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-fab' },
  { name: 'wired-icon-button', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-icon-button' },
  { name: 'wired-image', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-image' },
  { name: 'wired-input', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-input' },
  { name: 'wired-link', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-link' },
  { name: 'wired-listbox', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-listbox' },
  { name: 'wired-progress', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-progress' },
  { name: 'wired-radio', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-radio' },
  { name: 'wired-search-input', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-search-input' },
  { name: 'wired-slider', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-slider' },
  { name: 'wired-spinner', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-spinner' },
  { name: 'wired-tabs', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-tabs' },
  { name: 'wired-textarea', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-textarea' },
  { name: 'wired-toggle', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-toggle' },
  { name: 'wired-video', url: 'https://github.com/wiredjs/wired-elements/tree/master/packages/wired-video' }
];

export function getControlByName(name) {
  for (const c of controls) {
    if (c.name === name) {
      return c;
    }
  }
  return null;
}