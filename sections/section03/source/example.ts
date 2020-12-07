// For projects with higheer complexity, it's helpful to have a convenient way to debug our TS code
// That's why important to have the "sourceMap" option enabled in our tsconfig file

// If we compile the following code with the "sourceMap" option on...

function sayHello(name: string) {
   console.log("Hello " + name);
}

sayHello("World");

// we will get an "example.js.map" which our developer tools will use to easily track our JS compiled code back to our TS code
// That will make the debugging proccess way easier
