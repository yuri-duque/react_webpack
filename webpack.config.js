const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry:  path.resolve(__dirname, './src/index.tsx'),
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // Plugin que simplifica a criação de arquivos HTML para servir seus pacotes.
      template: path.resolve(__dirname, './public/index.html'), 
    }),
    new CleanWebpackPlugin(), // Um plugin webpack para remover / limpar sua (s) pasta (s) de construção.
    new webpack.HotModuleReplacementPlugin(), // Atualiza o navegador quando houver alterações no código
  ],
}