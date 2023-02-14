const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src', 'pages', 'index.js'),
  devtool: 'inline-source-map',
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: { importLoaders: 1 }
            },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    watchFiles: ['*/**/*.html']
  }
}