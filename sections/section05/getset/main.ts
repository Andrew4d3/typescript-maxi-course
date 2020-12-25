class Person {
   // In TS you have the option to define getters and setters for class properties
   name: string;
   private age: number;

   get getAge() {
      // some extra logic
      console.log("Getting age for:", this.name);
      return this.age;
   }

   set setAge(age: number) {
      // some extra logic
      console.log("New age for:", this.name, "is", age);

      this.age = age;
   }

   // And a constructor
   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }
}

const person = new Person("Andrew", 34);

// Use the setter as if it were a simple public property
console.log(person.getAge);

// An the setter as if you were assinging a property
person.setAge = 33;
console.log(person.getAge);
