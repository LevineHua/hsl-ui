/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:49:51
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 17:40:27
 * @FilePath: /hsl-ui/packages/hsl-ui/index.ts
 */
import type { App } from 'vue'
import ElTest from '@hsl-ui/test'
import ElForm, { useForm } from '@hsl-ui/form'

// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'

const version = version_ // version_ to fix tsc issue

const components = [
  ElTest,
  ElForm,
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  ElTest,
  ElForm,
  version,
  install,
}

export {
  useForm,
}

export default {
  version,
  install,
}
