// We use abstract classes when we want to force a class child to override a specific method
abstract class Person {
   name: string;
   age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   // We don't provide a default implementation for this method, we want the class child to do it
   abstract printInfo(): void;
}

class Employee extends Person {
   role: string;

   constructor(n: string, a: number, r: string) {
      super(n, a);
      this.role = r;
   }

   // It's mandatory to provide an implemetation for this method. Otherwise we'll get an error
   printInfo() {
      console.log(this.name, "is an", this.role);
   }
}
// Abstract classes cannot be instanciated by its own
// const person = new Person("Andrew", 34); Error!

// Only their children can do it...
const employee = new Employee("Andrew", 34, "admin");

employee.printInfo();
