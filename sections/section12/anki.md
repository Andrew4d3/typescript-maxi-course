What can we do to use JS libraries (Vanilla JS) with TS?

---

We can install the types package for such a library (as a dev dependency)

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section12/types/main.ts)

===

What about librares that don't have a "types" dependency or any additional javascript code that we want to integrate into our typescript project? How can we work around them?

---

We can use the "declare" keyworkd for those cases

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section12/declare/main.ts)

===

What library can we use to ransoform JS raw objects (eg: JSON) into Typescript classes?

---

class-transformer

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section12/transformer/main.ts)

===

What library can we use to validate a class instance object?

---

class-validator

[Code 1](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section12/validator/person.model.ts)

[Code 2](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section12/validator/main.ts)
