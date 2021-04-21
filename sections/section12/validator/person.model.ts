import { IsNotEmpty, Min } from "class-validator";

export class Person {
   @IsNotEmpty()
   name: string;
   @Min(18) // To verify is not underage
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   printMessage() {
      console.log(`Hi ${this.name}, you are ${this.age} years old.`);
   }
}
