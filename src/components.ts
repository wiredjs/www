export interface ControlItem {
  name: string;
  url: string;
}

export const controls: ControlItem[] = [
  { name: 'wired-button', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-button.md' },
  { name: 'wired-calendar', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-calendar.md' },
  { name: 'wired-card', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-card.md' },
  { name: 'wired-checkbox', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-checkbox.md' },
  { name: 'wired-combo', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-combo.md' },
  { name: 'wired-dialog', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-dialog.md' },
  { name: 'wired-divider', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-divider.md' },
  { name: 'wired-fab', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-fab.md' },
  { name: 'wired-icon-button', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-icon-button.md' },
  { name: 'wired-image', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-image.md' },
  { name: 'wired-input', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-input.md' },
  { name: 'wired-link', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-link.md' },
  { name: 'wired-listbox', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-listbox.md' },
  { name: 'wired-progress', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-progress.md' },
  { name: 'wired-radio', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-radio.md' },
  { name: 'wired-search-input', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-search-input.md' },
  { name: 'wired-slider', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-slider.md' },
  { name: 'wired-spinner', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-spinner.md' },
  { name: 'wired-tabs', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-tabs.md' },
  { name: 'wired-textarea', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-textarea.md' },
  { name: 'wired-toggle', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-toggle.md' },
  { name: 'wired-video', url: 'https://github.com/rough-stuff/wired-elements/blob/master/docs/wired-video.md' }
];

export function getControlByName(name: string): ControlItem | null {
  for (const c of controls) {
    if (c.name === name) {
      return c;
    }
  }
  return null;
}