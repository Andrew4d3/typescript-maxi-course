// We can use function as types to work with callback functions
function sum(val1: number, val2: number, cb: (result: number) => void): void {
   const result = val1 + val2;
   cb(result);
}

// So we need to use as callback a function that satisfies the signature we defined in our parameter
sum(1, 2, (res) => {
   console.log(res);
});

// If we try to use a cb that doesn't comply with that signature, we will get an error
function doSomethingDifferent(foo: string) {}
// sum(2, 3, doSomethingDifferent); // Error!
