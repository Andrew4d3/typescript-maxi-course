How can we work with decorator factories in TS?

---

We need to make our decorator to accept a parameter and return a function.
The outter function will accept any parameter we want. The inner function will take the class constructor as parameter.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/params/main.ts)

===

What does a class decorator take as parameter?

---

The class constructor

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/constructor/main.ts)

===

When adding multiple decorator factories, how will the call order be?

---

The outter function (factory) will always run from top to bottom while the inner function (the one that accepts the decorator parameters) will always run from bottom to top

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/multiple/main.ts)

===

How can we use property decorator to "proxiy" our object properties?

---

By using the `Object.defineProperty` we can change the target instance, and change the behavior of the `set` and `get` properties.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/property/main.ts)

===

What does a Method decorator accept as parameters?

---

-  The target class
-  The method name
-  And its property descriptor

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/methods/main.ts#L5)

===

What does a Parameter decorator accept as parameters?

---

-  The target class
-  The parameter name
-  And the parameter order

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/methods/main.ts#L17)

===

When do decorators execute? When do they not?

---

Decorators are only called when you define or declare the targeted class.They're not called when you create objects out of those classes

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/execution/main.ts)

===

How can we use decorators to bind some event to a class method?

---

We can use a method decorator. By using the decorator property descriptor, we can bind the `this` object from the target instance. So that the event listener will know which `this` object the handler function refers to.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/autobind/main.ts)

===

How can we use decorators to add validation to our properties.

---

We can use property decorators. We first need to set a registry of validations. Then, we can use our decorator functions to add validatios to that regisry.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section08/validator/main.ts)
