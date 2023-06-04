const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        text: /\.css$/,
        exclude: /node_modules/,
        use: ['css-loader', 'style-loader'],
      },
      {
        text: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: ['sass-loader', 'css-loader', 'style-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  devServer: {
    static: {       
      directory: path.resolve(__dirname, './dist')
    }
  }
}