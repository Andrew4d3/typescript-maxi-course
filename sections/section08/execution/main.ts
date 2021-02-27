// Decorators are only called when you define or declare the targeted class
// They're not called when you create objects out of your classes
// So you should use them, only when you want to add extra functionality or metadata to your classes

function Logger(_: Function) {
   // You only declare the class once, so this is only going to appear once
   console.log("Decorator has been called");
}

@Logger
class Car {
   model = "CX30";

   constructor() {
      console.log("Creating car object");
   }
}

// It doesn't matter how many objects we create, we're going to see the decorator being called just once
console.log(new Car());
console.log(new Car());
console.log(new Car());
