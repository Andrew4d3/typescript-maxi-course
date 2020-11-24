// What about if we want a variable to use multiple types without having to use "any"
// We use "union types"
let bar: string | number;

// Now bar could be either a string or a number
bar = 1;
bar = "Hello!";

// Unfortunately this doesn't work well when we have to perform certain operations
bar = Math.random() > 0.5 ? "Hello " : 1;
let bar2: number | string = Math.random() > 0.5 ? "World" : 2;

// const result: number = bar + bar2; // This will throw an error!

// So for this situation we need to verify the data type the variable has
let result: number | string;
if (typeof bar == "number" && typeof bar2 == "number") {
   result = bar + bar2;
}
result = bar.toString() + bar2.toString();

console.log(result);
