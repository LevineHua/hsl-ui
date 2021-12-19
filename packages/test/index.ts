/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:45:26
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-19 13:34:32
 * @FilePath: /hsl-ui/packages/test/index.ts
 */
import { App } from 'vue'
import type { SFCWithInstall } from '@hsl-ui/utils/types'
import Test from './src/index.vue'

Test.install = (app: App): void => {
  app.component(Test.name, Test)
}

const _Test: SFCWithInstall<typeof Test> = Test

export default _Test
