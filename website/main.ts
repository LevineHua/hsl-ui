/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:58:56
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-26 13:35:00
 * @FilePath: /hsl-ui/website/main.ts
 */
import { createApp } from 'vue'
import App from './src/App.vue'

import hslUi from 'hsl-ui'

console.log(hslUi)

import '@hsl-ui/theme-chalk/src/index.scss'


const app = createApp(App)


app.mount('#play')
