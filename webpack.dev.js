const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Ibrahim Qronfli",
      favicon: "./src/assets/food.ico",
    }),
  ],
  devServer: {
    static: "./dist",
  },
});
