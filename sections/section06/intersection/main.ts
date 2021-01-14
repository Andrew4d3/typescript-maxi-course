// Let's say we want to combine two different types, this one:
type Person = {
   name: string;
};

// And this one:
type Employee = {
   id: number;
};

// We can do this using the "&" operator. This is called: "Intersection Types"
type CombineType = Person & Employee;

let newEmployee: CombineType = {
   name: "Andrew",
   id: 123,
};
console.log(newEmployee);

// We can do the same with interfaces
