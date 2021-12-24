/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 15:44:22
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 15:42:40
 * @FilePath: /hsl-ui/vite.config.ts
 */
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
// import './website/vite.init'

import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(async () => {
  console.log('====================')

  // console.log(
  //   `${path.resolve(
  //     path.resolve(path.resolve(__dirname, '..', '..'), 'play'),
  //     '.',
  //     'src',
  //   )}/`,
  // )

  return {
    resolve: {
      alias: [
        // {
        //   find: /\/@\//,
        //   replacement: `${path.resolve(
        //     path.resolve(path.resolve(__dirname, '..'), 'play'),
        //     '.',
        //     'src',
        //   )}/`,
        // },
      ],
    },
    // server: {
    //   host: true,
    // },
    server: {
      host: '0.0.0.0',
      port: 3333,
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        include: `${__dirname}/**`,
        resolvers: ElementPlusResolver({ importStyle: 'sass' }),
      }),
      Inspect(),
    ],

    optimizeDeps: {
      include: [
        '@vue/shared',
        '@vueuse/core',
        'async-validator',
        'memoize-one',
        'normalize-wheel-es',
        '@popperjs/core',
        'dayjs',
      ],
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    },
  }
})
