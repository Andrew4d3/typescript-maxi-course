// Tuples in TS are like arrays but with a fixed length
const nameAndAge: [string, number] = ["Andrew", 34];

// With tuples, if we tried to include extra elements, we would get an error
let nameAndAge2: [string, number];
// nameAndAge2 = ["Andrew", 34, 1]; // Error!

// But we can assign values that meets the tuple criteria
nameAndAge2 = ["Andrew", 33];

// Be aware that we can still use the push method
nameAndAge2.push("this should not happen but it's allowed");
