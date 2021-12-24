/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:40:13
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 17:53:19
 * @FilePath: /hsl-ui/build/rollup.config.js
 */
/**
 * @deprecated use node api build
 */
// import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'
import path from 'path'
import { getPackagesSync } from '@lerna/project'
import vueJsx from '@vitejs/plugin-vue-jsx'

import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('./plugin.js')
const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name =>
    name.includes('@hsl-ui') &&
    !name.includes('transition') &&
    !name.includes('utils'),
  )

export default inputs.map(name => ({
  input: path.resolve(__dirname, `../packages/${name.split('@hsl-ui/')[1]}/index.ts`),
  output: {
    format: 'es',
    file: `lib/${name.split('@hsl-ui/')[1]}/index.js`,
    paths(id) {
      if (/^@hsl-ui/.test(id)) {
        return id.replace('@hsl-ui', '..')
      }
    },
  },
  plugins: [
    // terser({
    //   module: true,
    //   compress: {
    //     ecma: 2015,
    //     pure_getters: true,
    //   },
    // }),
    nodeResolve(),
    // commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
        'exclude': [
          'node_modules',
          '__tests__',
        ],
      },
      abortOnError: false,
      clean: true,
    }),
    css(),
    vue({
      target: 'browser',
      css: false,
    }),
    // vueJsx(),
  ],
  external(id) {
    return /^vue/.test(id)
      || /^@hsl-ui/.test(id)
      || deps.some(k => new RegExp('^' + k).test(id))
  },
}))
