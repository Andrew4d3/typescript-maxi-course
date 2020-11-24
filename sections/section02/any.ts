// Any is a very flexible TS type, that you can use to store any value not matter how its type is
let foo: any;

foo = 1;
foo = "Hello";
foo = true;
foo = { foo: "bar" };
// Or anything else...

// When working with TS, it's not recommended to use the "any" type since you loose the type-checking benefits of using TS
// So try to avoid using it
