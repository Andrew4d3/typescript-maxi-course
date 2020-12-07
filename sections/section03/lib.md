If we wanted to indicate which standard global properties and libraries are included in the compilation proccess, we would use the `lib` field from the tsconfig file.

For example, if we want to include global properties for ES6, we need to do something like this:

```
...
"lib": [
    "ES2015"
] /* Specify library files to be included in the compilation. */,

```

If we also wanted to include browser objects like `document`, the following config will suffice:

```
"lib": [
    "ES2015",
    "DOM"
] /* Specify library files to be included in the compilation. */,
```
