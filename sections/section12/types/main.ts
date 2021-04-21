// To use vanilla javascrip libraries, we need to also install the types package for such a library

// In this case, besides installing "lodash", we also need to install "@types/lodash" as a dev dependency
import _ from "lodash";

const numbers = [8, 2, 3, 7];

// Now we can use lodash methods with typescript featues
console.log(_.sortBy<number>(numbers));
