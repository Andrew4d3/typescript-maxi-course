How to create a class in TS?

---

[Using the "class" keyword](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/basic/basic.ts)

===

How can you include extra type safety when working with classes in TS?

---

[Set a type to "this"](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/methods/main.ts)

===

If we wanted to restrict the access of some properties or methods in TS, what would we do?

---

[Use the "private" keyword](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/private/main.ts)

===

What shorthand do we have to avoid assigning properties in constructors?

---

[Define the public accessors within the constructor parameters](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/shorthand/main.ts)

===

What keyword do we need to use for inheriting a parent class? And what do we need to do when we want to extend a child class (new properties)

---

[We use the "extends" keyword and use the "super" method within the child class constructor](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/inheritance/main.ts)

===

What accessor type do we need to use if we want to make a parent property be accessible from a child class?

---

[We use the "protected" accessor](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/protected/main.ts)

===

How can we use getters and setters in TS?

---

[They can be used as you would use your properties (when assing or refering)](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/getset/main.ts)

===

What's the idea behind static class methods in TS? And how should we use such methods from within a regular class method?

---

[You don't require to instantiate a class for using them, and you should use the name class instead of the "this" keyword when using them from within a regular method](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/static/main.ts)

===

When do we use "abstract classes"? Can we instantate an abstract class?

---

[We use abstract classes when we want to force a class child to override a specific method, We can't instantiate an abstract class](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/abstract/main.ts)

===

How can we implement the Singleton DP whith TS?

---

[We use private constructors](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/singleton/main.ts)

===

How can we use interfaces in TS?

---

[Just use the "interface" keyword](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/interface/main.ts)

===

What's the point of using interfaces when we already have types?

---

[Unlike types, We can use interfaces with classes](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/intvstype/main.ts)

===

Why do we need interfaces in the first place?

---

[We use interfaces to group common functiality across multiple classes](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/whyinterface/main.ts)

===

How can we use the "reaonly" keyword with interfaces for objects?

---

[Jus as you would do with types](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/readonlyinter/main.ts)

===

How can we combine or extend multiple interfaces? (3)

---

There are three ways:

-  Within the class signature (using comma as separator)
-  Extending one interface using the "extends" keyword
-  Extending multiple intefaces into a new one (using comma as separator)

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/combineinter/main.ts)

===

How can we use interfaces to define function signatures? Is there any better alternative?

---

[Just write the function signature within the interface body. But it's better to use types for this](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/interfacefn/main.ts)

===

How can we define optional parameters or properties in TS?

---

[Just use the question mark (?) right after the parameter/property name](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section05/optionalprop/main.ts)
