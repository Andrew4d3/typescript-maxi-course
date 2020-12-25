// Just as we types, you can also use interfaces to define a function signature:

interface FnInterface {
   (a: number, b: number): number;
}

let sum: FnInterface = (a: number, b: number) => {
   return a + b;
};

console.log("Result", sum(1, 2));
// Nevertheless, it's more common to use type aliases for this...
