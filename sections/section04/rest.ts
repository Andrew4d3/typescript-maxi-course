// You can use the rest operator with TS just the same as you use it with JS
// But now you can also define a data type

function myFunc(...values: number[]) {
   values.forEach((val: number) => console.log(val));
}

myFunc(1, 2, 3, 4);

// We can do the same with tuples
function myFunc2(...tuple: [string, number]) {
   console.log(tuple);
}

myFunc2("Andrew", 1986);
