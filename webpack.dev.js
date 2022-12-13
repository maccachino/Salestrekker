// eslint-disable-next-line no-undef
const { merge } = require("webpack-merge");
// eslint-disable-next-line no-undef
const common = require("./webpack.common.js");

// eslint-disable-next-line no-undef
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
});
