'use strict';

const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminPngquant = require('imagemin-pngquant');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    //https: true,
    magicHtml: true,
    historyApiFallback: true,
    compress: true,
    port: 3005,
    open: false,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
      {
        test: /\.styl$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              stylusOptions: {
                use: ['rupture'],
                includeCSS: true,
                compress: true,
                sourceMap: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      Data: path.resolve(__dirname, 'src/data/'),
      Components: path.resolve(__dirname, 'src/views/components/'),      
      Pages: path.resolve(__dirname, 'src/views/pages/'),
      Structure: path.resolve(__dirname, 'src/views/structure/'),
      Sections: path.resolve(__dirname, 'src/views/sections')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Dotenv(),
    new HtmlPlugin({
      title: 'Tractian',
      filename: 'index.html',
      template: 'src/views/templates/default.html',
      inject: false
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/img', to: 'assets/img' },
        { from: 'src/assets/browserconfig.xml', to: 'assets' },
        { from: 'src/assets/manifest.json', to: 'assets' },
      ],
    }),
  ],
}

module.exports = (env, argv) => {
  if(argv.mode === 'development'){
    config.devtool = 'inline-source-map';
  } else if(argv.mode === 'production'){
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin()
      ],
    };
    config.plugins.push(
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        plugins: [imageminPngquant()],
      })
    );
  }

  return config;
};
