import { AsyncRoughGenerator } from './generator-async';
import { RoughCanvasBase } from './canvas-base';
export class AsyncRoughCanvas extends RoughCanvasBase {
    constructor(canvas, config) {
        super(canvas);
        this.gen = new AsyncRoughGenerator(config || null, this.canvas);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.gen.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.gen.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.gen.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async circle(x, y, diameter, options) {
        const d = await this.gen.circle(x, y, diameter, options);
        this.draw(d);
        return d;
    }
    async linearPath(points, options) {
        const d = await this.gen.linearPath(points, options);
        this.draw(d);
        return d;
    }
    async polygon(points, options) {
        const d = await this.gen.polygon(points, options);
        this.draw(d);
        return d;
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.gen.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
    }
    async curve(points, options) {
        const d = await this.gen.curve(points, options);
        this.draw(d);
        return d;
    }
    async path(d, options) {
        const drawing = await this.gen.path(d, options);
        this.draw(drawing);
        return drawing;
    }
}
