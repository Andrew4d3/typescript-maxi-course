// With TS Generics we are able to create a component that can work over a variety of types rather than a single one
// Arrays and Promises are some primitive types where we can use this feature

// TS will know we are defining an Array of strings here
const myArray: Array<string> = ["foo", "bar"]; // this is equivalent to string[]

// We can also specify the type that a Promise will resolve to
const myPromise: Promise<string> = new Promise((resolve) => {
   setTimeout(() => {
      resolve("foo"); // TS will know this function can only receive a string
   }, 100);
});

myPromise.then((response) => {
   // response is infered as string here, since it was declared by our promise generic
   console.log(response.split("")); // TS can use string native methods like "split"
});
