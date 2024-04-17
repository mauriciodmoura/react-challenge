const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      })
    ],
    devServer: {
      hot: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
    },
  };
};
