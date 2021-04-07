const path = require("path");

module.exports = {
   mode: "development",
   // The project's entrypoint
   entry: "./src/app.ts",
   // The bundle destination
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "dist",
   },
   // To set development server configurations
   devServer: {
      publicPath: "/dist/",
   },
   // To allow debugging with TS files
   devtool: "inline-source-map",
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
};
