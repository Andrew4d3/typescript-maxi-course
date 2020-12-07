// We use the target option in our tsconfig file to indicate which Ecmascript version our TS code will compile to.
// By default is set to "es5" but we can change this.

let foo1: string = "hey";
const bar2 = "hey bar!";

// We will get a different JS file if we compile the code above using "es5" or "es6" as target
// If we compile using "es5" as target, we will get "var" definitions:
/*
var foo1 = "hey";
var bar2 = "hey bar!";
*/

// But with "es6" we will get "let" and "const" definitions, since they're available in es6
/*
let foo1 = "hey";
const bar2 = "hey bar!";
*/
