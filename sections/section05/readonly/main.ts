class Person {
   // You can set the "readonly" property to fields that you don't want to change once they are initialized
   constructor(public readonly name: string, private age: number) {}
}

const person = new Person("Andrew", 34);

// Now if you try to change name you will get an error
// person.name = "hhh"; // Error!
