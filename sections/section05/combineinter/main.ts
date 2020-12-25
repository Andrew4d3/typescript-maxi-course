// There are several ways to combine multiple interfaces
interface PersonDataA {
   name: string;
   greet(msg: string): void;
}

interface PersonDataB {
   age: number;
}

// One way is to do it in the class itself
class Person implements PersonDataA, PersonDataB {
   name: string;
   age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   greet(msg: string) {
      console.log(msg + this.name);
   }
}

// Another way is to extend an interface, similar to what we would do with a class
interface PersonDataExtended extends PersonDataA {
   age: number;
}

// And a third way is to extend multiple interfaces into a third one using a comma as separator
interface PersonDataC extends PersonDataA, PersonDataB {
   // This would take everything from A and B
}

class Employee implements PersonDataC {
   name: string;
   age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   greet(msg: string) {
      // Different logic!
      console.log("Greeting:", msg + this.name);
   }
}

// By defining our variable with the interface type, we can assign an object instanciated by any of the both classes above
let person: PersonDataC;

person = new Person("Andrew", 34);
person.greet("Hi ");
