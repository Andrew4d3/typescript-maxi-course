// As you already know, we can also define what type a function returns
function sayHello1(name: string): string {
   return "Hello " + name;
}

// But it's better to le TS to infer the returning type
function sayHello2(name: string) {
   return "Hello " + name;
}

// For functions that don't return any value, we can use the special function type "void"
function sayHello3(name: string): void {
   console.log("Hello " + name);
}

// But again, it's better to let TS to infer this by not specifying anything...
function sayHello4(name: string) {
   console.log("Hello " + name);
}

// If we try to get a value from a "void" function, we will get undefined
console.log(sayHello3("Andrew")); // This will pŕint undefined after printing "Hello Andrew"
