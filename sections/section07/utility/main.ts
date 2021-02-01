// In TS, we can use some utilities with generic types

// Let's say we have have an Object that implements an interface
interface Person {
   name: string;
   age: number;
   city: string;
}

// Now let's say we have this factory function that creates a Person
function createPerson(name: string, age: number, city: string): Person {
   // If we wanted to progresively define the person properties, we could use a Partial generic
   const myPerson: Partial<Person> = {}; // This could be empty becuse we declare it as a "partial" Person

   // Now we can progresivele set all the missing properties and perform some validations if we want

   myPerson.name = "Andrew";
   myPerson.age = 34;
   myPerson.city = "Santiago";

   // To return it, we need to type cast the object
   return myPerson as Person;
}

console.log(createPerson("Andrew", 34, "Santiago"));

// There's also the ReadOnly generic that comes handy when want to force an object or array to not be modified once declared

// By using the Readonly generic we're telling TS to not allow the modification of this array
const myNames: Readonly<string[]> = ["Andrew", "Davis"];
// So any push or pop attemp will not be permitted
// myNames.push("What?"); // <-- Error!

// We can also use it with objects
const myPerson: Readonly<Person> = {
   name: "Andrew",
   age: 34,
   city: "Santiago",
};

// myPerson.age = "What?"; // Error! All properties are read-only since the Readonly generic was used
