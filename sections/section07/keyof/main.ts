// Generics can help us to refine our function behavior

// Let's suppose we have this function, it will return the value of an object based on an entered key
function getValue(a: object, key: string) {
   // The problem is that TS will not know wheter or not hat key exists. So we get an error
   // return a[key]; // Error!
}

// Using the "keyof" we can work around this issue
// Here we're saying that U is the type of a key in T.
function getValueRevisted<T extends object, U extends keyof T>(a: T, key: U) {
   return a[key];
}

console.log(getValueRevisted({ foo: "bar" }, "foo"));
