/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:40:13
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-18 21:42:08
 * @FilePath: /hsl-ui/build/build.component.js
 */
/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const { getPackages } =  require('@lerna/project')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const { noElPrefixFile } = require('./common')

const deps = Object.keys(pkg.dependencies)

const runBuild = async () => {
  let index = 0
  const pkgs = await getPackages()
  const inputs = pkgs
    .map(pkg => pkg.name)
    .filter(name =>
      name.includes('@hsl-ui') &&
      !name.includes('utils'),
    ).slice(process.argv[2], process.argv[3])

  build(inputs[index])

  async function build(name) {
    if (!name) return
    const inputOptions = {
      input: path.resolve(__dirname, `../packages/${name.split('@hsl-ui/')[1]}/index.ts`),
      plugins: [
        nodeResolve(),
        css(),
        vue({
          target: 'browser',
          css: false,
        }),
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
        }),
      ],
      external(id) {
        return /^vue/.test(id)
          || /^@hsl-ui/.test(id)
          || deps.some(k => new RegExp('^' + k).test(id))
      },
    }
    const getOutFile = () => {
      const compName = name.split('@hsl-ui/')[1]
      if(noElPrefixFile.test(name)) {
        return `lib/${compName}/index.js`
      }
      return `lib/el-${compName}/index.js`
    }
    const outOptions = {
      format: 'es',
      file: getOutFile(),
      paths(id) {
        if (/^@hsl-ui/.test(id)) {
          if (noElPrefixFile.test(id)) return id.replace('@hsl-ui', '..')
          return id.replace('@hsl-ui/', '../el-')
        }
      },
    }

    const bundle = await rollup.rollup(inputOptions)
    console.log(name, 'done')
    await bundle.write(outOptions)
    index++
    if (index < inputs.length) {
      await build(inputs[index])
    }
  }
}

runBuild()
