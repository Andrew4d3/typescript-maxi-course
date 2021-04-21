// What if we want to transform a raw object (json object comming from an inbound HTTP request) into a class instance?

// We can use a library called "class-transformer" for that
import { plainToClass } from "class-transformer";
import { Person } from "./person.model";

// Let's say we have the following array of raw data
const people = [
   { name: "Andrew", age: 34 },
   { name: "Dalien", age: 28 },
];

// And we want to transform each object from this array into a Person instance.
// We can do it manually just like this-

let peopleInstances: Person[] = people.map((p) => {
   return new Person(p.name, p.age);
});

// This would work fine, but it's too cumbersome
// So we can use the class-transformer library instead...
peopleInstances = plainToClass(Person, people);

// Now with less code, we could achieve the same result:
console.log(peopleInstances);
