// "Function" is also a special type in TS
function add(val1: number, val2: number): number {
   return val1 + val2;
}

let myFunction: Function;
myFunction = add;

// Unfortunately this Type is too general and will allow any function to be used. Just like an "any" for functions
myFunction = console.log;

// So a way to be more specific is to explicitly define de function signature as a type:
let myFunction2: (val1: number, val2: number) => number;
myFunction2 = add;

// If we try to assing a function with different signature, we will get an error
// myFunction2 = console.log; // Error!
