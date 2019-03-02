import { AsyncRoughGenerator } from './generator-async';
import { RoughSVGBase } from './svg-base';
export class AsyncRoughSVG extends RoughSVGBase {
    constructor(svg, config) {
        super(svg);
        this.gen = new AsyncRoughGenerator(config || null, this.svg);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    opsToPath(drawing) {
        return this.gen.opsToPath(drawing);
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.gen.line(x1, y1, x2, y2, options);
        return this.draw(d);
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.gen.rectangle(x, y, width, height, options);
        return this.draw(d);
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.gen.ellipse(x, y, width, height, options);
        return this.draw(d);
    }
    async circle(x, y, diameter, options) {
        const d = await this.gen.circle(x, y, diameter, options);
        return this.draw(d);
    }
    async linearPath(points, options) {
        const d = await this.gen.linearPath(points, options);
        return this.draw(d);
    }
    async polygon(points, options) {
        const d = await this.gen.polygon(points, options);
        return this.draw(d);
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.gen.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
    }
    async curve(points, options) {
        const d = await this.gen.curve(points, options);
        return this.draw(d);
    }
    async path(d, options) {
        const drawing = await this.gen.path(d, options);
        return this.draw(drawing);
    }
}
