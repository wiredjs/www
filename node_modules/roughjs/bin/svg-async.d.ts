import { Config, Options, OpSet, ResolvedOptions } from './core';
import { AsyncRoughGenerator } from './generator-async';
import { Point } from './geometry';
import { RoughSVGBase } from './svg-base';
export declare class AsyncRoughSVG extends RoughSVGBase {
    private gen;
    constructor(svg: SVGSVGElement, config?: Config);
    readonly generator: AsyncRoughGenerator;
    getDefaultOptions(): ResolvedOptions;
    opsToPath(drawing: OpSet): string;
    line(x1: number, y1: number, x2: number, y2: number, options?: Options): Promise<SVGGElement>;
    rectangle(x: number, y: number, width: number, height: number, options?: Options): Promise<SVGGElement>;
    ellipse(x: number, y: number, width: number, height: number, options?: Options): Promise<SVGGElement>;
    circle(x: number, y: number, diameter: number, options?: Options): Promise<SVGGElement>;
    linearPath(points: Point[], options?: Options): Promise<SVGGElement>;
    polygon(points: Point[], options?: Options): Promise<SVGGElement>;
    arc(x: number, y: number, width: number, height: number, start: number, stop: number, closed?: boolean, options?: Options): Promise<SVGGElement>;
    curve(points: Point[], options?: Options): Promise<SVGGElement>;
    path(d: string, options?: Options): Promise<SVGGElement>;
}
