import { render } from 'lit-html/lib/shady-render';
import { UpdatingElement } from './lib/updating-element.js';
export * from './lib/updating-element.js';
export * from './lib/decorators.js';
export { html, svg } from 'lit-html/lit-html';
export class LitElement extends UpdatingElement {
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        super.update(changedProperties);
        if (typeof this.render === 'function') {
            this.constructor
                .render(this.render(), this.renderRoot, this.localName);
        }
        else {
            throw new Error('render() not implemented');
        }
    }
}
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 */
LitElement.render = render;
//# sourceMappingURL=lit-element.js.map