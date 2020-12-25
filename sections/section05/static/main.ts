class Person {
   // You can define static fields within your class
   static legalAge = 18;
   name: string;
   private age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   // You can also define static methods that contain common logic
   static currentTime(): Date {
      return new Date();
   }

   setAge(age: number) {
      // To access a static property (or method) from within a normal method
      // Do not use "this". Use the class name instead
      // const legalAge = this.legalAge; error!

      if (age >= Person.legalAge) {
         this.age = age;
      }
   }
}

// Accessing static properties does not require instanciating a class
console.log(Person.legalAge);
// The same for methods
console.log(Person.currentTime());

const person = new Person("Andrew", 34);
person.setAge(17);
console.log(person, "Didn't work, under legal age");
