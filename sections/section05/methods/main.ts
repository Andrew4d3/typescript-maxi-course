class Person {
   name: string;

   constructor(n: string, a: number) {
      this.name = n;
   }

   // Include a method like this:
   greet(): void {
      console.log("Hi " + this.name);
   }

   // To include extra type safety, you can define the this type
   greetSafely(this: Person): void {
      console.log("Hi Safe " + this.name);
   }
}

const person = new Person("Andrew", 34);

person.greet();

// Now if we tried to assing the greetSafely to a literal object, we would get an error
const falsePerson = { greetSafely: person.greetSafely };
// falsePerson.greetSafely(); // Error!

// So we would need to include the missing properties of Person to do just that
const falsePerson2 = {
   name: "False",
   greet: person.greet,
   greetSafely: person.greetSafely,
};
falsePerson2.greetSafely(); // This will work fine
