/*
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-12-26 13:30:48
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-26 13:31:09
 * @FilePath: /hsl-ui/packages/theme-chalk/gulpfile.js
 */
'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

const noElPrefixFile = /(index|base|display)/

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssmin())
    .pipe(rename(function (path) {
      if(!noElPrefixFile.test(path.basename)) {
        path.basename = `cb-${path.basename}`
      }
    }))
    .pipe(dest('./lib'))
}


exports.build = series(compile)
