/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:45:26
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 17:04:51
 * @FilePath: /hsl-ui/packages/form/index.ts
 */
import { App } from 'vue'
import type { SFCWithInstall } from '@hsl-ui/utils/types'
import Form from './src/index.vue'

Form.install = (app: App): void => {
  app.component(Form.name, Form)
}

const _Form: SFCWithInstall<typeof Form> = Form

export * from './src/types/form'

export { useForm } from './src/hooks/useForm'

export { default as ApiSelect } from './src/components/ApiSelect.vue'

export default _Form
