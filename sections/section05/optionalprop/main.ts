// You can define optional properties or parameters to your interfaces, types, classes or functions. Just use the question(?) mark

// For interfaces (the same applies to types)
interface PersonI {
   name: string;
   age?: number; // This is optional now

   greet(msg: string): void;
}

let person: PersonI;

person = {
   name: "Andrew",
   // We don't need to assign "age", because it's optional
   greet(msg: string) {
      console.log(msg + this.name);
   },
};

// For classes
class PersonC {
   name: string;
   age?: number; // age is not mandatory
   // Optional parameter
   constructor(n: string, a?: number) {
      this.name = n;
      this.age = a;
   }

   greet(msg: string) {
      // Different logic!
      console.log("Greeting:", msg + this.name);
   }
}

const person2 = new PersonC("Andrew"); // We're not sending the second argument because it's optional

person.greet("Hi ");
person2.greet("Hey ");
