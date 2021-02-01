// You might wonder, why do we have to use generics when we have union types?
// The main difference with union types is that a generic type lockes in a specific type

// This function works with union types
function doSomething(a: string | number): string | number {
   // do something with values
   return a;
}

// The function above can accept either a string or a number, and will return either a string or a number

// The type is not locked in. It might return a string even if the parameter is a number
const b = doSomething(1); // b might be string or number

// But using generics
function doSomething2<T extends string | number>(a: T): T {
   // do something with values
   return a;
}

// Now the function above will return a string only when the parameter is string, and a number only when the parameter is a number
const c = doSomething2<string>("Andrew"); // c can only be a string
const d = doSomething2<number>(1986); // d can only be a number

console.log(c, d);
