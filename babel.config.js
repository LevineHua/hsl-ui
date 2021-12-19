/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-12-18 21:38:02
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-18 21:38:46
 * @FilePath: /hsl-ui/babel.config.js
 */
module.exports = {
  // ATTENTION!!
  // Preset ordering is reversed, so `@babel/typescript` will called first
  // Do not put `@babel/typescript` before `@babel/env`, otherwise will cause a compile error
  // See https://github.com/babel/babel/issues/12066
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/typescript',
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/proposal-class-properties',
    '@babel/transform-runtime',
    'lodash',
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        '@babel/transform-typescript',
      ],
    },
  ],
  env: {
    utils: {
      ignore: [
        '**/*.test.ts',
        '**/*.spec.ts',
      ],
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['hsl-ui'],
            alias: {
              '@hsl-ui': 'hsl-ui/lib',
            },
          },
        ],
      ],
    },
  },
}
