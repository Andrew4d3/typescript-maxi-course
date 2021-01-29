// With Generics we can add extra flexiblity in our functions

// Let's suppose we have a function that returns the merge between 2 objects
// We could do something like this
function myMerge(a: Object, b: Object) {
   return Object.assign(a, b);
}

// Fuction above works perfectly fine, but it's too imprecise because we don't know what a and b are
const result = myMerge({ foo: "foo" }, { bar: "bar" });
// console.log(result.foo); // This will throw an error because TS doesn't know if result object has an "foo" property

// We can use a type casting to work around this issue, but that would be too cumbersome
// This is where TS generics step in

// With generics, we can just simple declare the object types as parameters (T and U)
function myMerge2<T, U>(a: T, b: U) {
   return Object.assign(a, b); // TS will infer the returning value is the intersection between the types T and U (T & U)
}

const result2 = myMerge2({ foo: "foo" }, { bar: "bar" });
console.log(result2.foo); // Now TS understands that result2 has a "foo" property
