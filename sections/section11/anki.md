When using TS with ES modules, why should we use webpack?

---

When importing files using ES modules with TS, we get a HTTP request every time we do an import. This adds a lot of over head to our application.
Instead, webpack will package everything into one single file (bundle) so that our web app will do one single HTTP request instead of many. Of course, this will take much less time to load.

===

What dev-dependencies should we install to use Webpack with TS? (5) (Explain each of them)

---

-  webpack: the main library
-  webpack-cli: to run webpack commands in the terminal
-  webpack-dev-server: a development server that provides live reloading
-  typescript: the TS compiler
-  ts-loader: Webpack loaders can transform files from a different language ( TypeScript) to JavaScript. This will use the typescript dependency.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section11/package.json#L14-L18)

===

What 5 things do we need to set in our tsconfig file when using webpack?

---

-  target: should be "es6"
-  module: should be "es2015"
-  outDir: should be the bundle file directory
-  rootDir: does not need to be set because webpack will take care of this.
-  sourceMap: should be "true" to allow easy debugging.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section11/tsconfig.json)

===

What properties should we set in the webpack config file when using TS? (5)

---

-  entry: the entrypoint for our TS project
-  output: with 2 subproperties "filename" and "path". When setting the "path" config, we need to use the `path.resolve` built-in feature from nodejs
-  devtool: to allow the debugger to work with ts files
-  module: to indicate the rules that our ts-loader should consider
-  resolve: to indicate the files the webpack builder should resolve

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section11/webpack.config.js)

===

What webpack options do we need to set for starting a dev server with TS?

---

We need to set the `devServer` options. That includes the `publicPath` option where we need to indicate the bundle file path.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section11/webpack.config.js#L14)

===

Steps for setting a webpack workflow for production (4)

---

-  Install the clean-webpack-plugin dependency [Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section11/package.json#L13)
-  Create a separate config file for production
-  Change the configurations accordingly. [Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section11/webpack.config.prod.js)
-  Create a new npm command for creating the production build. [Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section11/package.json#L8)
