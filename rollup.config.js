import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const babelConfig = {
  exclude: 'node_modules/**',
  plugins: ['external-helpers']
};

export default [
  {
    output: {
      file: './build/index.js',
      format: 'umd',
      name: 'ReactAwesomeDate'
    },
    input: './src/index.js',
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      resolve(),
      babel(babelConfig),
      alias({
        react: 'node_modules/react/umd/react.development.js'
      }),
      nodeResolve({
        jsnext: true,
        main: true
      }),
      commonjs({
        include: 'node_modules/**'
      })
    ],
    external: ['react'],
    globals: {
      react: 'React'
    }
  },
  {
    output: {
      file: './build/ui/onlymonth.js',
      format: 'umd',
      name: 'RADOnlyMonth'
    },
    input: './src/ui/onlymonth/index.js',
    plugins: [
      resolve(),
      babel(babelConfig),
      alias({
        react: 'node_modules/react/umd/react.development.js'
      }),
      nodeResolve({
        jsnext: true,
        main: true
      }),
      commonjs({
        include: 'node_modules/**'
      })
    ],
    external: ['react'],
    globals: {
      react: 'React'
    }
  },
  {
    output: {
      file: './build/ui/input.js',
      format: 'umd',
      name: 'RADInput'
    },
    input: './src/ui/input/index.js',
    plugins: [
      resolve(),
      babel(babelConfig),
      alias({
        react: 'node_modules/react/umd/react.development.js'
      }),
      nodeResolve({
        jsnext: true,
        main: true
      }),
      commonjs({
        include: 'node_modules/**'
      })
    ],
    external: ['react'],
    globals: {
      react: 'React'
    }
  }
];
