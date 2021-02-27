// We can use decorators to add validations to our properties

// We create an interface for our validator configuration
interface ValidatorConfig {
   [property: string]: {
      [validatableProp: string]: string[]; // ['required', 'positive']
   };
}

// we create a global object to store all of our configurations
const registeredValidators: ValidatorConfig = {};

// We set each of our decorator definitions
// NOTE: there are better ways to do this, without repeating so much code
// but for learning purposes we will go like this
function RequiredP(target: any, propName: string) {
   console.log(target.constructor.name, "adding required");

   const validatorRegistry =
      registeredValidators[target.constructor.name] || {};

   const currentValidators = validatorRegistry[propName] || [];

   registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [...currentValidators, "required"],
   };
}

function PositiveNumber(target: any, propName: string) {
   console.log(target.constructor.name, "adding positive");

   const validatorRegistry =
      registeredValidators[target.constructor.name] || {};

   const currentValidators = validatorRegistry[propName] || [];

   registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [...currentValidators, "positive"],
   };
}

// The validator function will evaluate each of the properties using their corresponding validation
function validate(obj: any) {
   const objValidatorConfig = registeredValidators[obj.constructor.name];
   if (!objValidatorConfig) {
      return true;
   }
   let isValid = true;
   for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
         switch (validator) {
            case "required":
               isValid = isValid && !!obj[prop];
               break;
            case "positive":
               isValid = isValid && obj[prop] > 0;
               break;
         }
      }
   }
   return isValid;
}

class Car {
   // We just mark each object property with the validation we want to perform
   @RequiredP
   model: string;
   @PositiveNumber
   year: number;

   constructor(m: string, y: number) {
      this.model = m;
      this.year = y;
   }
}

const car1 = new Car("CX30", 2021);
console.log("The object is:", validate(car1) ? "valid" : "not valid");
const car2 = new Car("", 0);
console.log("The object is:", validate(car2) ? "valid" : "not valid");
