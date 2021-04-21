export class Person {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   printMessage() {
      console.log(`Hi ${this.name}, you are ${this.age} years old.`);
   }
}
