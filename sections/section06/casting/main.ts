// Sometimes we want a global or unknown input value to be of a certain type.
// This is called casting, and there are two ways to achieve this

function function1(date: any) {
   // Using "<>"
   const inputDate = <Date>date;
   // The only problem with this syntax is that it will collide with React (tsx)
   console.log(inputDate.toJSON()); // inputDate will behave as an instance of Date
}

function function2(date: any) {
   // A different alternative is to use the "as" keyword
   const inputDate = date as Date; // inputDate will behave as an instance of Date

   console.log(inputDate.toJSON());
}

// Of course, if we pass a non-date value as parameter we will get a runtime error
function1(new Date()); // Ok!

// function2({}); // <-- this will throw an error because the parameter is not an instance of Date
