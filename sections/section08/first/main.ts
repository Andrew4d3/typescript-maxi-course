// As popular convenction. Decorators start with a Uppercase letter
function Logger(target: Function) {
   console.log(target);
}

// You can use a decorator using a "@" before the decorator's name
@Logger
class Car {
   model = "CX30";

   constructor() {
      console.log("Creating car object");
   }
}

console.log(new Car());
