// But why do we need interfaces in the first place? We use interfaces to group common functiality across multiple classes
interface PersonInterface {
   name: string;
   greet(msg: string): void;
}

// Here we have 2 slighly different classes implementing the same interface
class Person implements PersonInterface {
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

class Employee implements PersonInterface {
   name: string;

   constructor(n: string) {
      this.name = n;
   }

   greet(msg: string) {
      // Different logic!
      console.log("Greeting:", msg + this.name);
   }
}

// By defining our variable with the interface type, we can assign an object instanciated by any of the both classes above
let person: PersonInterface;

person = new Person("Andrew", 34);
person.greet("Hi ");
// We only can access the properties assigned by the interface
// console.log(person.age); // Error!

person = new Employee("Andrew");
person.greet("Hey ");
