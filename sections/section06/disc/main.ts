// Checking for the presence of a value to verify an object is of given type can be useful, but this has its caveats
// What if we change our properties? That would require some refactoring...
// So what alternatives do we have? Something called discriminated unions

type User = {
   type: "user"; // We add this extra property of literal type "user"
   name: string;
   id: number;
};

type Admin = {
   type: "admin"; // the same for "admin"
   name: string;
   role: number;
};

type Person = User | Admin;

function printInfo(person: Person) {
   console.log("Name:", person.name);
   // Now, instead checking the presence of the "role" or "admin" property, we just check the "type" property
   switch (person.type) {
      case "admin":
         console.log("Role:", person.role);
         break;
      case "user":
         console.log("User id:", person.id);
   }
}

printInfo({ type: "user", name: "Andrew", id: 123 }); // TS will tell us to either use "user" or "amin" for type here
printInfo({ type: "admin", name: "Andrew", role: 123 });
