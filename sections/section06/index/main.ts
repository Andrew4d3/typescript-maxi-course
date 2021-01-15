// What if we want to add an object with some flexibility?
// Maybe we want to create some sort of HashTable. We use index types to achieve that!

interface myMap {
   // We define the data type for the key (string, number or symbol) and the data type for its value
   [prop: string]: string;
}

// Now we can do things like this
const myObj: myMap = {};
myObj["foo"] = "fooo";
myObj["bar"] = "fooo";

// But we cannot do something like this
// myObj["bar"] = 1; // <-- Error!

console.log(myObj);
