// With function overloads you can add multiple signatures to a function so that TS will know which data type value will return
// based on the parameters received

// We define our overloads like this:
function mySuperFunction(a: string): number; // Return number if string is received
function mySuperFunction(a: number): string; // Return string if number is received
function mySuperFunction(a: string | number) {
   if (typeof a == "string") {
      return a.length;
   }
   return "Hi " + a.toString(); // Otherwise is number
}

// TS plugin will list all alternatives
const myNumber = mySuperFunction("Hey"); // This returns a number
const myString = mySuperFunction(3); // This returns a string

console.log(myNumber);
console.log(myString);
