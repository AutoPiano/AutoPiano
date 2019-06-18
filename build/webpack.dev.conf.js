var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var SpritesmithPlugin = require('webpack-spritesmith')


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, `../src/assets/images/icon`),
        glob: 'icon-*.png'
      },
      target: {
        image: path.resolve(__dirname, `../src/assets/images/sprite.png`),
        css: [
          [path.resolve(__dirname, `../src/assets/style/icon.css`),{format:'handlebars_based_template'}]
        ]
      },
      apiOptions: {
        cssImageRef: "../images/sprite.png"
      },
      customTemplates:{
        handlebars_based_template: function (data) {
          if(data.sprites.length) {
            var bg = "background-image: url('I');".replace('I', data.sprites[0].image);
            var shared = `.icon { ${bg} }`;
            var perSprite = data.sprites.map(function (sprite) {
              return `.N { display:inline-block; width: Wpx; height: Hpx; background-position: Xpx Ypx; vertical-align:top; ${bg} }`
                .replace('N', sprite.name)
                .replace('W', sprite.width)
                .replace('H', sprite.height)
                .replace('X', sprite.offset_x)
                .replace('Y', sprite.offset_y);
            }).join('\n');
            return shared + '\n' + perSprite;
          }
        }
      }
    })
  ]
})
