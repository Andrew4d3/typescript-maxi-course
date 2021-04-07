Which two ways do we have in TS to write modular code?

---

-  Namespaces and file bundling
-  ES6 imports and exports

===

How can we use TS namespaces with multiple subfolders?

---

We just need to set the relative path of the targeted TS file (where the shared namespace is found). Example:

Let's say your folder structure is as follows:

```
subfolder (both files contain the same namespace that main.ts has)
|_ calculator.ts
|_ utility.ts
main.ts

```

From main ts you need do something like this if you want to get access to the namespaces exposed by calulator.ts and utility.ts

```
/// <reference path="subfolder/calculator.ts" />
/// <reference path="subfolder/calculator.ts" />
```

===

When exporting any source file, how many times will the file run?

---

It will run only once

===

Which TS syntax should we use to refer namespaces across multiple source files?

---

This syntax:

```
/// <reference path="file.ts" />
```

-  [Main](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section10/namespace/main.ts)
-  [Calulator](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section10/namespace/calculator.ts)

===

What's the problem with namespaces, and what alternative do we have?

---

The problem is that we don't get any type-safety, and the alteranive is to use ES modules.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section10/module/main.ts)

===

List of ways to import elements in TS (it works the same in JS)

---

-  Using the "\*" operator to export everything
-  Not using curly brackets to export the default element

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section10/group/main.ts)
