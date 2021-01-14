// We use type guards to check the type of a variable with ambiguous type (union types, any) in runtime
// There are 3 different type guards

// We use typeof for primitive values (string, number, boolean)

type Alphanumeric = string | number;

function concatOrSum(a: Alphanumeric, b: Alphanumeric) {
   if (typeof a == "string" || typeof b == "string") {
      // The typescript compiler will threat a and b as string in this block
      // That's why we can use the "toString" methods
      return a.toString() + b.toString();
   }

   return a + b;
}

concatOrSum(1, 2);
concatOrSum(1, " <- one");

// For objects we need to use the "in" keyword

type User = {
   name: string;
};

type Admin = {
   name: string;
   role: number;
};

type Person = User | Admin;

function printInfo(person: Person) {
   // We know both (Admin and User) have a name:
   console.log(person.name);
   // But only admins have roles, so we need to check the presence of the role property by using the "in" keyword
   if ("role" in person) {
      console.log(person.role); // Now the TS compiler knows this parameter is "Admin" type
   }
}

printInfo({ name: "Andrew" });
printInfo({ name: "Andrew", role: 1 });

// You can use "in" for classes to, but a more elegant way would be using "instanceof"

class Dog {
   walk() {
      console.log("Walking like a dog");
   }

   wuf() {
      console.log("Wuf!!");
   }
}

class Cat {
   walk() {
      console.log("Walking like a cat");
   }

   meow() {
      console.log("meooooow!!");
   }
}

type Pet = Dog | Cat;

function doSomething(pet: Pet) {
   // We know but type of pets can walk, so there is no need to use a type guard
   pet.walk();
   // But we know a type guard for our second action
   if (pet instanceof Cat) {
      pet.meow(); // TS will know this a Cat
   } else {
      pet.wuf(); // ... and this is a dog
   }
}

const myCat = new Cat();
const myDog = new Dog();

doSomething(myCat);
doSomething(myDog);
