What TS feature would we use if we wanted to combine two interfaces or types?

---

We would use "Intersection Types" with the "&" operator.

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/intersection/main.ts)

===

In TS, when dealing with variables with ambigous type (any, union types). How can we avoid runtime errors? (3)

---

Using "Type Guards"

-  typeof
-  in
-  instanceof

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/guards/main.ts)

===

If we didn't want to use "type guards" (e.g the "in" keyword) to check an object's type, what alternatives would we have?

---

There's a common pattern called "discrimated unions", where we set a property "type" containing a fixed value. Then we can check this "type" property within our function

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/disc/main.ts)

===

If we wanted to set a specifc type to an unknown input or global value (any), what would we use?

---

Type casting either by using the "< DataType >" form or by using the `as` keyword

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/casting/main.ts)

===

What TS feature would we use if we want to define ab object type that accepts any key in string or number form?

---

By using index properties, we can set a type or interface signature that fulfills our requirement.

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/index/main.ts)

===

What TS feature would we use if we wanted a function to behave differently depending on the parameter it receives?

---

With function overloads we can specify multiple signatures for a single function.
Bear in mind that the main signature should contain type definitions encompassing the other signatures.

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/overloads/main.ts)

===

What TS feature would we use if we wanted to reference some nested properties but we don't know whether or not the parent properties exist?

Example: `myObjcect.myNestedObject.field1`. Here we don't know if `myNestedObject` is defined.

---

With optional chaining we can do just that.
We just need to use the question mark (?) before the property that we're not sure whether is defined or not.

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/chaining/main.ts)

===

What TS operator can we use in substitution of the `||` operator that we use for assigning default values?
In this case we just want to consider as "falsy" values: null or undefined and not empty string or 0.

---

We would use the double question mark (??) to achieve just this.

[Explanation](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section06/nullish/main.ts)
