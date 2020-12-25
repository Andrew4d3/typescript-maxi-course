// You can use public, private or protected accessor with intefaces
// But you can define readonly properties
interface Person {
   readonly name: string;
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

// Just as classes, trying to overwrite a readonly property will get an error
// person.name = "hhh"; // Error!
person.greet("Hi ");
