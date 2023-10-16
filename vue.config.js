const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, 'src/assets/icons')
    // 内置的svg处理排除指定目录下的文件
    config.module.rule('svg').exclude.add(dir).end()

    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ extract: false }).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
  }
}