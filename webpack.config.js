const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'src/content/script': './src/content/script.js',
    'src/background/background': './src/background/background.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
        {from: 'manifest.json', to: 'manifest.json'},
        {from: 'popup.html', to: 'popup.html'},
        {from: 'images', to: 'images'}
      ],
      {
        copyUnmodified: true
      })
  ],
  mode: 'none'
};
