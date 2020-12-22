class Person {
   name: string;
   age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }
}

// To inherit a class, we just need to add the "extends" keyword
class Employee1 extends Person {
   // If we don't define a constructor, our class will assume the parent's one
}

let employee = new Employee1("Andrew", 34);

class Employee2 extends Person {
   role: string;

   // If we wanted to extend our child class with new properties and methods,
   // we would need to use the "super" keyword first
   constructor(n: string, a: number, r: string) {
      super(n, a);
      this.role = r; // This only belongs to the child class
   }

   changeRole(role: string) {
      this.role = role;
   }
}

let employee2 = new Employee2("Andrew", 34, "admin");

console.log(employee);
console.log(employee2);
