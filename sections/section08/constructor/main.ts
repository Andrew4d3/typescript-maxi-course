// By using constructors within decorators we can create instances out of the targeted class

// This decorator will create an instance out of the car class and print the plate number
const Logger = (plate: string) => (constructor: typeof Car) => {
   const car = new constructor(plate);
   console.log("Plate is", car.getPlate());
};

// So the decorator will receive the parameters the constructor will use
@Logger("YYZZ11")
class Car {
   model = "CX30";
   private plate: string;

   constructor(plate: string) {
      console.log("Creating car object");
      this.plate = plate;
   }

   getPlate(): string {
      return this.plate;
   }
}
