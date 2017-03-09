const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = true

let plugins = [
  new HtmlWebpackPlugin({
    title: 'Trainee React Test Site',
    template: `${path.join(__dirname, './client')}/index.ejs`,
    production: isProd,
    inject: true
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]

module.exports = function (env) {
  return {
    devtool: 'source-map',
    context: path.join(__dirname, './client'),
    entry: {
      js: 'index'
    },
    output: {
      path: path.join(__dirname, './static'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [ {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                require.resolve('babel-preset-es2015'),
                require.resolve('babel-preset-react'),
                require.resolve('babel-preset-stage-1')
              ],
              plugins: [
                require.resolve('babel-plugin-transform-runtime'),
                require.resolve('babel-plugin-react-html-attrs')
              ],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        path.join(__dirname, './client'),
        'node_modules'
      ]
    },
    plugins: plugins,
    devServer: {
      contentBase: './client',
      historyApiFallback: true,
      port: '3000',
      hot: true,
      compress: isProd,
      stats: { colors: true }
    }
  }
}
