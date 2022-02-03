const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js'
  },
  devtool: false,
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      environment: {
        // 是否使用箭头函数
        arrowFunction: false,
        const: false
      },
  },
  resolve: {
    extensions: [".js", '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@css': path.resolve(__dirname, 'src/assets/css')
    }
  },
  devServer: {
    open: true
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/, 
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1, //往前寻找一个loader
                  esModule: false
                },
              },
              'postcss-loader'
            ]
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1, //往前寻找一个loader
                  esModule: false
                }
              },
              'postcss-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            type: 'asset',
            generator: {
              filename: 'img/[name][ext]'
            },
            parser: {
              dataUrlCondition: {
                maxSize: 0
              }
            }
          },
          {
            test: /\.(ttf|woff2?)$/,
            type: 'asset/resource',
            generator: {
              filename: 'font/[name][ext]'
            }
          },
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: '给爷爬1',
          template: './public/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            globOptions: {
              ignore: ['**/index.html']
            }
          }
        ]
      }),
      new DefinePlugin({
          BASE_URL: '"./"'
      }),
      new VueLoaderPlugin()
  ]
}
