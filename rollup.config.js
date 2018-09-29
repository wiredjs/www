import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

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
    plugins: [resolve(), minify({ comments: false })]
  },
  {
    input: 'src/showcase-app.js',
    output: {
      file: `${outFolder}/showcase.min.js`,
      format: 'iife',
      name: 'WebElementsShowcase'
    },
    onwarn,
    plugins: [resolve()]
  }
];