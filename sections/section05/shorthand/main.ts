class Person {
   // To avoid doing this tedious initialization...
   // name: string;
   // age: number;

   // We can define our constructor like this
   constructor(public name: string, private age: number) {
      // this.name = n;
      // this.age = a;
   }
}

const person = new Person("Andrew", 34);

console.log(person);
