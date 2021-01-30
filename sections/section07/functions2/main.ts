// Using generics within our functions we can provide some sort of polymorfism in our functions

// For this function TS will accept any type that has a property length
function getLength<T extends { length: number }>(a: T) {
   if (a.length) {
      return console.log("Length:", a.length);
   }

   console.log("No length");
}

getLength("foo"); // A string has a property length, so it will be accepted
getLength(["A", "B"]); // Arrays too
// But numbers don't have a length property. So it will not compile
// getLength(1); // Error!
