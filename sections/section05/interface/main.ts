// You can't use public, private or protected to define your interface properties or methods
// But you can use readonly
interface Person {
   readonly name: string; // Once "name" is assigned, it cannot be changed
   age: number;

   greet(msg: string): void;
}

let person: Person;

person = {
   name: "Andrew",
   age: 34,
   greet(msg: string) {
      console.log(msg + this.name);
   },
};

person.greet("Hi ");
// If we tried to re-assign the "name" property, we would get an error
// person.name = "Nope"; // Error!
