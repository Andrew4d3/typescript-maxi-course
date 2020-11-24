// You can use "literals" to define more spcecific sub-types

// First form of literal type is when you define a const value without explicitly specifying its type
const myConst = "Hello";
// So, TypeScript sets the type to be "Hello World" not string

// You can also define literal types like this:
type Easing = "ease-in" | "ease-out" | "ease-in-out";
let easing: Easing = "ease-in";

// if you try to specifiy a string other than the ones allowed by the literaly type difinition, you will get an error
// easing = "foo"; // This throws an error
