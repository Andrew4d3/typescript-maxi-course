// We can be a little bit more strict with out generic types by using generic constraints

// This will work but there is too much flexibility with T and U. We're accepting any type
function myMerge<T, U>(a: T, b: U) {
   return Object.assign(a, b);
}

// So if we pass a number as parameter, it will be accepted
const result = myMerge({ foo: "foo" }, 30); // 30 is not an object but an error is not thrown

// The best way to work around this issue is to have generic generic contraints using the "extends" keyword

// T and U can only be types extending from object
function myMerge2<T extends object, U extends object>(a: T, b: U) {
   return Object.assign(a, b);
}

// const result2 = myMerge2({ foo: "foo" }, 30); // Now "30" wont work here
console.log(myMerge2({ foo: "foo" }, { bar: "bar" })); // We're forced to work only with objects
