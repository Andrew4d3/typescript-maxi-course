// When using multiple decorators in chain, it's important to know the order they will run

const LoggerPlate = (plate: string) => {
   // The outter function will always run from top to bottom
   // So this will run first... (1)
   console.log("LoggerPlate started...");
   // While the inner function (returning function) will always run from bottom to top
   return (constructor: typeof Car) => {
      const car = new constructor(plate);
      // So this will print last (4)
      console.log("Plate is", car.getPlate());
   };
};

const PrintModel = (message: string) => {
   // And this will run second... (2)
   console.log("PrintModel started...");
   return (constructor: typeof Car) => {
      // And this will run third (3)
      console.log(message, constructor.getModel());
   };
};

@LoggerPlate("YYZZ11")
@PrintModel("The model is")
class Car {
   private static model = "CX30";
   private plate: string;

   constructor(plate: string) {
      this.plate = plate;
   }

   getPlate(): string {
      return this.plate;
   }

   static getModel(): string {
      return Car.model;
   }
}
