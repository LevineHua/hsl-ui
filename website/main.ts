/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:58:56
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-18 22:01:13
 * @FilePath: /hsl-ui/website/main.ts
 */
import { createApp } from 'vue'
import App from './src/App.vue'

import '../packages/theme-chalk/src/index.scss'

const app = createApp(App)

app.mount('#play')
