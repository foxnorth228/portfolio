const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        loader: 'svg-inline-loader'
      },
    {
        test: /\.m?js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
    },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
    fallback: {
      "path": false,
      "os": false,
      "crypto": false,
      "process": require.resolve("process/browser")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.draft.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: '' },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist')
    }
  }
}