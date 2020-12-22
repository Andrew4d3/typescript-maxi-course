class Person {
   name: string;
   // It's "protected" instead of "private", so that it can be accessed from a child class
   protected age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   changeAge(age: number) {
      this.age = age;
   }
}

class Employee extends Person {
   role: string;

   constructor(n: string, a: number, r: string) {
      super(n, a);
      this.role = r;
   }

   // Here we're overriding the method
   changeAge(age: number) {
      if (age < 18) {
         return;
      }
      // We can access this parent property because it's "protected" rather than "private"
      this.age = age;
   }
}

let employee = new Employee("Andrew", 34, "admin");

employee.changeAge(15);
// No effect!, it means we're successfuly overriding the method from the parent class
console.log(employee, "Not 15!");

employee.changeAge(55);
// Now it works
console.log(employee);
