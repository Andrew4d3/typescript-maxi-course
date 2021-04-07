const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
   mode: "production",
   // The project's entrypoint
   entry: "./src/app.ts",
   // The bundle destination
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
   },

   devtool: false,
   // To set how our modules will be treated (example: what loader we're going to use)
   module: {
      rules: [
         {
            // To indicate the targeted extension for this rule
            test: /\.ts$/,
            // The loader we're going to use
            use: "ts-loader",
            // To exclude directories or files
            exclude: /node_modules/,
         },
      ],
   },
   // To indicate the files the webpack builder should resolve
   resolve: {
      extensions: [".ts", ".js"],
   },
   plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
