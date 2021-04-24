import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED')
    return;
  console.error(warning.message);
}

const outFolder = 'dist';

export default [
  {
    input: 'bin/main.js',
    output: {
      file: `${outFolder}/main.min.js`,
      format: 'iife',
      name: 'WebElements'
    },
    onwarn,
    plugins: [resolve(), terser({
      output: {
        comments: false
      }
    })]
  },
  {
    input: 'bin/showcase.js',
    output: {
      file: `${outFolder}/showcase.min.js`,
      format: 'iife',
      name: 'WebElementsShowcase'
    },
    onwarn,
    plugins: [resolve(), terser({
      output: {
        comments: false
      }
    })]
  }
];