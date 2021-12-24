/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:58:56
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 16:36:38
 * @FilePath: /hsl-ui/website/main.ts
 */
import { createApp } from 'vue'
import App from './src/App.vue'

import hslUi from 'hsl-ui'

console.log(hslUi)


const app = createApp(App)


app.mount('#play')
