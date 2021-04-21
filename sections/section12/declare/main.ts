// What about librares that don't have a "types" dependency
// or any additional javascript  code that we want to integrate into our typescript project?
// How can we work around them?

// We can use the "declare" keyworkd for those cases
declare var dpacl: any;

var dpacl = require("dpacl"); // This library does not have a type definition

// Now we can use the library
console.log(dpacl);
