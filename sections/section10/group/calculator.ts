export function add(a: number, b: number) {
   return a + b;
}

export function substract(a: number, b: number) {
   return a - b;
}

// The default export is usually used in cases where there is one single element being exported in a file
export default function printResult(result: number) {
   console.log(result);
}
