module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入 polyfill
        corejs: 3,
        modules: false
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ],
    [
      '@babel/proposal-class-properties'
    ],
    [
      '@babel/proposal-object-rest-spread'
    ]
  ]
}
