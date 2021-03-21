// When working with namespaces, we don't get the type safety that probably we want when working with TS
// That's why we can use ES6 modules

// With ES6 modules we can just import what we need from the targeted source file
import { add, substract } from "./calculator";

function printResultSum() {
   // We're using the add function exported from calculator.ts
   console.log(add(1, 1));
}

function printResultSubstraction() {
   // We're using the substract function exported from calculator.ts
   console.log(substract(2, 1));
}

printResultSum();
printResultSubstraction();
// We also need to revert the changes we did to the Tsconfig file
/*
  "module": "commonjs"
*/
