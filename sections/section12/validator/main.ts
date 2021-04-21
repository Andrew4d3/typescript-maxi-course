// What if we want to validate that our instance meets certain requirements (validations)?

// We can use a library called "class-validator" for that
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { Person } from "./person.model";

const people = [
   { name: "Andrew", age: 34 },
   { name: "Dalien", age: 28 },
   // The following objects are not valid
   { name: "Underage", age: 5 },
   { name: "", age: 18 },
   { name: "", age: 0 },
];

const peopleInstances: Person[] = plainToClass(Person, people);

// Now let's validate each person
validatePeople(peopleInstances);

async function validatePeople(people: Person[]) {
   for (let i = 0; i < people.length; i++) {
      // So for each instance we need to call the validate function
      const errors = await validate(people[i]);

      // If we get erros, we should get a no-empty errors array
      if (errors.length) {
         console.log("We have found some errors");
         console.log(errors);
         continue;
      }

      // Otherwise, the instance is valid
      console.log("This object is fine:", people[i]);
   }
}
