// As we saw at the previous point, we can use type aliases for defining union types
type ModeName = "admin" | "user";
let adminMode: ModeName = "admin"; // Other thing than "admin" or "user" will fail

// You can also use core data types
type StringOrNumber = string | number;
let myValue: StringOrNumber;
myValue = 1;
myValue = "Hello";
// myValue = false; // This will fail

// And you can also define a complex type using an object
type UserInfo = {
   name: string;
   age: number;
};

const myUser = { name: "Andrew", age: 25 };
let userRef: UserInfo;
userRef = myUser;
