const person = {
   name: "Andrew",
   age: 34,
};

// If I tried to access a property that does not exist. I would get an error
console.log(person.name);

// I can also define an object explicitly
const person2: object = {
   name: "Andrew",
   age: 34,
};

// I can also define object properties explicitly
const person3: {
   name: string;
   age: number;
} = {
   name: "Andrew",
   age: 34,
};

// Always is better to let typescript to infer the object property types

// You can also have nested object types

let person4: {
   id: string;
   price: number;
   tags: string[];
   details: {
      title: string;
      description: string;
   };
};

person4 = {
   id: "abc1",
   price: 12.99,
   tags: ["great-offer", "hot-and-new"],
   details: {
      title: "Red Carpet",
      description: "A great carpet - almost brand-new!",
   },
};
