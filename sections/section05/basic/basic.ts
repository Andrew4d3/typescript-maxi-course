// This is how you can declare a class in TS
class Person {
   // You can define field types
   name: string;
   age: number;

   // And a constructor
   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }
}

const person = new Person("Andrew", 34);

console.log(person);
