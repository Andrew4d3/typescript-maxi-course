// If we want to split our code so that we can work in a more modular way, we can use TS namespaces.

// First we need to tell TS which files we'll be refering to. (Files that contain parts of our namespace)
/// <reference path="calculator.ts" />

// This namespace will have access to everything exported by the same namespace
namespace Calculator {
   function printResultSum() {
      // The add function is being exported in the Calculator namespace located at the calculator.ts file
      console.log(add(1, 1));
   }

   function printResultSubstraction() {
      // The substract function is being exported in the Calculator namespace located at the calculator.ts file
      console.log(substract(2, 1));
   }

   printResultSum();
   printResultSubstraction();
}

// We also need to add the following configurations in our TSconfig file, since everything needs to be compiled to one single JS file
/*
  "module": "amd"
  "outFile": "./dist/bundle.js"
*/
