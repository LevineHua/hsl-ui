/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:45:26
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-25 21:58:02
 * @FilePath: /hsl-ui/packages/header/index.ts
 */
import { App } from 'vue'
import type { SFCWithInstall } from '@hsl-ui/utils/types'
import Header from './src/index.vue'

Header.install = (app: App): void => {
  app.component(Header.name, Header)
}

const _Header: SFCWithInstall<typeof Header> = Header

export default _Header
