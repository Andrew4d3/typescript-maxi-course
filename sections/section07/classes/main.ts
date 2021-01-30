// We can use generic types with clases too

// Let's say we want to declare a Queue data structure that can accept any type
// We do this, using the same syntax we used for functions
class Queue<T> {
   private data: T[] = [];

   // Our methods will accept elements of T type
   addItem(item: T) {
      this.data.push(item);
   }

   // And might also return elements of T type
   removeItem(): T | undefined {
      // shift can return undefined if array is empty
      return this.data.shift();
   }

   getCurrentQueue() {
      return [...this.data];
   }
}

// So when we need to instantiate our queue we also need to indicate the data type to use
const queueOfObjects = new Queue<object>();
queueOfObjects.addItem({ foo: "foo" }); // So in this case TS will only accept object types
queueOfObjects.addItem({ foo: "bar" });
console.log(queueOfObjects.getCurrentQueue());
console.log("Removing from queue:", queueOfObjects.removeItem());
console.log(queueOfObjects.getCurrentQueue());

// We can define multiple queues that uses multiple data types
const queueOfStrings = new Queue<string>();
const queueOfNumbers = new Queue<number>();

// We are restricted to only use the data types we declared at the beginning
// So this won't work
// queueOfStrings.addItem(1); // This is a number! So it cannot be accepted
