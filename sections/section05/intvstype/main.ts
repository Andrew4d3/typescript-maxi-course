// You may wonder, what's the point of using interfaces when we already have types?
// The main advantage is that interfaces can be used with classes

interface PersonInterface {
   // Interfaces can only define public properties or methods
   name: string;
   greet(msg: string): void;
}

// We use the keyword "implements" to indicate we need to implement a class
// You can implement more than one class using comma as separator
class Person implements PersonInterface {
   name: string;
   // You can include extra properties within your class
   private age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   greet(msg: string) {
      console.log(msg + this.name);
   }
}

const person = new Person("Andrew", 34);
person.greet("Hey ");
