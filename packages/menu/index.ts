/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:45:26
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-25 22:33:13
 * @FilePath: /hsl-ui/packages/menu/index.ts
 */
import { App } from 'vue'
import type { SFCWithInstall } from '@hsl-ui/utils/types'
// import Menu from './src/index.vue'
import Menu from './src/index.vue'

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}

const _Menu: SFCWithInstall<typeof Menu> = Menu

export default _Menu
