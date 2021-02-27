// We can add decorators to class properties too
// We can do things like proxyng a property

// A decorator for properties receives two parameters, the target class and the property name
// We can do things like logging when the property is consulted or modified
function LogProperty<T>() {
   return function (target: T, propertyName: keyof T) {
      console.log(target, propertyName);
      let val = target[propertyName];

      // We declare a getter to observe when the variable is returned
      const getter = () => {
         console.log("Consulting", propertyName, "- Value is:", val);
         return val;
      };
      // And a modifier when it's modified
      const setter = (next: typeof val) => {
         val = next;
         console.log(propertyName, "has been changed to", val);
      };

      // We use the method define property to bind the getter and setter functions
      Object.defineProperty(target, propertyName, {
         get: getter,
         set: setter,
         enumerable: true,
         configurable: true,
      });
   };
}

class Car {
   @LogProperty<Car>()
   model: string;

   constructor(m: string) {
      console.log("Creating car object");
      this.model = m;
   }
}

const car = new Car("CX30");
// These two action will print the loggers defined by the decorator
car.model = "CX31";
const foo = car.model;
