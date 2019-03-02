import { Config, DrawingSurface } from '../core';
import { AsyncRoughCanvas } from '../canvas-async';
import { AsyncRoughSVG } from '../svg-async';
import { AsyncRoughGenerator } from '../generator-async';
declare const _default: {
    canvas(canvas: HTMLCanvasElement, config?: Config | undefined): AsyncRoughCanvas;
    svg(svg: SVGSVGElement, config?: Config | undefined): AsyncRoughSVG;
    generator(config: Config | null, surface: DrawingSurface): AsyncRoughGenerator;
};
export default _default;
