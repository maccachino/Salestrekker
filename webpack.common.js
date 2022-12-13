// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
