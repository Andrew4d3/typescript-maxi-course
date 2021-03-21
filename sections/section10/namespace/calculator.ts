// This namespace will be shared to any other same namespace that is referencing this file
namespace Calculator {
   // If we want to expose a function within our namespace, we need to add the export keyword
   export function add(a: number, b: number) {
      return a + b;
   }

   export function substract(a: number, b: number) {
      return a - b;
   }
}
