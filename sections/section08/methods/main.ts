//  Decorators can also be added in methods and their parameters

// A method decorator receives 3 arguments.
// The target, the method name, and a property decriptor
function LogMethod(
   target: any,
   methodName: string,
   descriptor: PropertyDescriptor
) {
   console.log("Logging method:", methodName);
   console.log("target:", target);
   console.log("descriptor:", descriptor);
}

// A parameter decorator alse receives 3 parameters.
// The target, the param name, and the position number
function LogParam(target: any, paramName: string, position: number) {
   console.log("Logging parameter:", paramName);
   console.log("target:", target);
   console.log("position:", position);
}

class Car {
   constructor(private model: string = "CX30") {}

   @LogMethod
   getModel() {
      return this.model;
   }
   // Todo
   setModel(@LogParam m: string) {
      this.model = m;
   }
}

// This car will have a plate
console.log(new Car());
