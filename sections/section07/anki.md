What can we do with generic types? What built-in examples do we have in TS?

---

We can accept Types as parameters and work around them. Promises and Arrays are some primitive examples.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/native/main.ts)

===

How can we use generic types in functions?

---

Using the "<" and ">" operators to pass the types for our generics. For example:

```
function myMerge2<T, U>(a: T, b: U) {
   return Object.assign(a, b);
}
```

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/functions/main.ts)

===

How can we add more restriction to our generic types?

---

By using the keyword "extends" we can add constraints into our generic functions

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/constraints/main.ts)

===

How can we add some sort of polymorfism within our functions using Generic types?

---

We can use the "extends" keyword. For example, we can accept parameters that contain the length property.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/functions2/main.ts)

===

Let's say we have a argument that we want to declare with the type that another argument has. What keyword can we use with our generic types?

---

We can use the "keyof" keyword like this.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/keyof/main.ts)

===

Examples for using generic types in classes.

---

We can use to define data structures like queues or stacks.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/classes/main.ts)

===

Two utility generic types that we have in TS. What can we do with them?

---

-  Partial: When we don't want to declare all the properties defined by a custom type or interface, but we want to do it progressively instead.
-  ReadOnly: When we want to declare all the properties from an object or array as read only.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/utility/main.ts)

===

Why do we have to use generics when we have union types?

---

The main difference with union types is that a generic type lockes in a specific type when union types don't.

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section07/vsunion/main.ts)
