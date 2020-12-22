class Person {
   // By default, a class field in TS is "public", there is no need to add the "public" keyword before the field definition
   name: string; // This is Public!
   // But to include a private field, you do need to add the "private" keyword before
   private role: "admin" | "user" = "admin";

   constructor(n: string) {
      this.name = n;
   }

   // private fields can only be accessed from within the class
   setUserRole(this: Person): void {
      this.role = "user";
   }

   printRoleInfo(this: Person): void {
      console.log(`${this.name} is ${this.role}`);
   }
}

const person = new Person("Andrew");
person.printRoleInfo();

// So this will not work
// person.role = "user"; // Error!

// But this will do!
person.setUserRole();
person.printRoleInfo();
