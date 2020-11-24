// We use the "never" keyword to tell TS that a function will never reach its end, and thus, it will never return anything
function Boom(): never {
   throw new Error("Boom!");
}

// We use never typically for never ending functions or functions that throw an error
