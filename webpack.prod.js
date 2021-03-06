

 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 const WorkboxPlugin = require("workbox-webpack-plugin");
 const HtmlWebpackPlugin = require("html-webpack-plugin");

 
 module.exports = merge(common, {
   mode: 'production',
   plugins: [
    new HtmlWebpackPlugin({
      title: "Rotations",
      favicon: "./src/assets/food.ico",
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
 });