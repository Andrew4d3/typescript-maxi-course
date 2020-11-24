// Arrays work pretty much the same as objects...
// We can let ts to infer the array type like this
const names = ["Andrew", "Olivier"];

// Or we can explicitly define it
const names2: string[] = ["Andrew", "Olivier"];

// If we try to include a value of incorrect type, we will get a compilation error
let names3: string[];
// names3 = ["Andrew", 2]; // Error!
names3 = ["Andrew", "Olivier"];

for (const name of names3) {
   // Using our editor, we can get access to properties or methos reserved for that specific data type
   console.log(name.toUpperCase());
   // And if we try to use a non existing method for that type, we will get an error
   // console.log(name.map()); // Error!!
}
