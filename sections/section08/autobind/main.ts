// We can use method decorators to change the property descriptor and do some extra stuff like autobinding any method
import { EventEmitter } from "events";

// This autobind decorator will be responsible to change the behavior of the property descriptor
function Autobind(
   _1: any,
   _2: string,
   descriptor: PropertyDescriptor
): PropertyDescriptor {
   // We need to return a new property desciptor which will override the original one
   return {
      configurable: true,
      enumerable: true,
      get() {
         // By doing this, we bind the "this" object to be used by the event listener (the one from the car instance)
         return descriptor.value.bind(this);
      },
   };
}

class Car {
   constructor(private model: string = "CX30") {}

   getModel() {
      return this.model;
   }

   @Autobind
   setModel(m: string) {
      this.model = m;
   }
}

const car = new Car();
const emiter = new EventEmitter();

// If we don't bind the this to the method or function, the event listener will take something different as "this"
// And the car instance would not change
emiter.on("setModel", car.setModel);
emiter.emit("setModel", "CX31");
console.log(car.getModel());
