// What if we wanted to pass parameters to our decorators and extend its functionality? We would do something like this...

// We make our decorator to return a function
// The outter function will accept any parameter we want. In this case, a string.
// The inner function will take the class constructor as parameter
type Constructor = new (...args: any[]) => {};

const WithPlate = (plate: string) => <T extends Constructor>(
   _constructor: T
) => {
   return class extends _constructor {
      // extending properties
      private plate = plate;
      constructor(..._: any[]) {
         super();
         console.log("This is being called from the decorator");
      }
      // and extending methods
      getPlate() {
         return this.plate;
      }
   };
};

// Now we can pass parameters to our decorator, just like we were calling a function
@WithPlate("YYZZ11")
class Car {
   model = "CX30";

   constructor() {
      console.log("Creating car object");
   }
}

// This car will have a plate and some extra functionality
console.log(new Car());
