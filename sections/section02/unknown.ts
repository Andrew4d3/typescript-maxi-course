// The unknown type is quite similar to any. We can use it to assing any data type
let foo2: unknown;

foo2 = 5;
foo2 = true;
foo2 = {};

// The may difference with "any" is that we can assign an unknown value to a variable using a specific data type
// let bar3: string = foo2; // Error!
