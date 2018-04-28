const globby = require('globby');
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const jsPath = path.resolve('./src/js');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, './dist/js'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader', options: { presets: ['es2015'] } }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MinifyPlugin()
  ]
};
