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
