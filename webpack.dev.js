const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    publicPath: "/dist/",
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
