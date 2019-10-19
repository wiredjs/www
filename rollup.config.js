import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED')
    return;
  console.error(warning.message);
}

const outFolder = 'dist';

export default [
  {
    input: 'src/main.js',
    output: {
      file: `${outFolder}/main.min.js`,
      format: 'iife',
      name: 'WebElements'
    },
    onwarn,
    plugins: [resolve(), terser({
      output: {
        comments: `/xxyyzzz/`
      }
    })]
  }
];