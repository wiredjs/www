import { AsyncRoughCanvas } from '../canvas-async';
import { AsyncRoughSVG } from '../svg-async';
import { AsyncRoughGenerator } from '../generator-async';
export default {
    canvas(canvas, config) {
        return new AsyncRoughCanvas(canvas, config);
    },
    svg(svg, config) {
        return new AsyncRoughSVG(svg, config);
    },
    generator(config, surface) {
        return new AsyncRoughGenerator(config, surface);
    }
};
