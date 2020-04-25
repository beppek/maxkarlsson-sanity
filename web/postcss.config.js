module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'color-mod-function': {unresolved: 'warn'},
        'nesting-rules': true,
        'custom-properties': {
          preserve: false
        }
      }
    })
  ]
})
