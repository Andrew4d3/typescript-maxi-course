By default TSC will compile all files at root level, but we can change this behaviour by setting the `rootDir` and `outDir` options

```
"outDir": "./dist" /* Redirect output structure to the directory. */,
"rootDir": "./src" /* Specify the root directory of input files.*/,
```

Now all our TS files will need to be at the `src` folder. The resulting JS files will be located at the `dist` folder

[Example](tsconfig.json)
