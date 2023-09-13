const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "[name].js",
  },
  //获取loader的绝对路径
  resolveLoader: {
    alias: {
      "babel-loader": path.resolve("loaders", "babel-loader.js"),
    },
    modules: [path.resolve("loaders"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          //loader: path.resolve("loaders", "babel-loader.js"),
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
