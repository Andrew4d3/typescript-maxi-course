// Just as JS, we can export all functions from a file using the * operator
import * as Calculator from "./calculator";
// If the module has a default import, we don't need to use curly brackets, we don't need to use the original function name either
import print from "./calculator";

// If we use the group operator we can access the exported functions using the dot operator
const resultSum = Calculator.add(1, 1);
const resultSubstract = Calculator.substract(2, 1);

print(resultSum);
print(resultSubstract);
