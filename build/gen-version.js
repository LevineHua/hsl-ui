/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:40:13
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-18 21:42:47
 * @FilePath: /hsl-ui/build/gen-version.js
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const tagVer = process.env.TAG_VERSION
if (tagVer) {
  version = tagVer.startsWith('v') ? tagVer.slice(1) : tagVer
} else {
  version = require('../package.json').version
}
fs.writeFileSync(
  path.resolve(__dirname, '../packages/hsl-ui/version.ts'),
  `export const version = '${version}'
`,
)
