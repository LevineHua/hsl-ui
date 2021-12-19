/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-26 10:16:05
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 15:11:17
 * @FilePath: /element-plus/play/vite.init.ts
 */
import { existsSync, writeFileSync, readFileSync } from 'fs'

const app = 'src/App.vue'
const example = 'app.example'

if (!existsSync(app)) {
  writeFileSync(app, readFileSync(example))
}
