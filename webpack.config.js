const path = require('path');

module.exports = {
  entry: './polymer-dep-test.html',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        // include: Condition(s) (optional),
        // exclude: Condition(s) (optional),
        options: {
        //   ignoreLinks: Condition(s) (optional),
        //   ignorePathReWrite: Condition(s) (optional),
          processStyleLinks: true,
        //   htmlLoader: Object (optional)
        },
        loader: 'polymer-webpack-loader'
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};