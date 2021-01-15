// We know that we can use the || operator to define default values when the variable does not exist
// The problem with this approach is when we deal with falsey values like 0 or empty string, maybe we want those to be taking into account
// In TS we can use something called nullish cohesion to work around this issue

// name might be a string, null or undefined value
function processName1(name?: string | null) {
   // Using the "||" operator we check against any falsy value (including empty string)
   const message = name || "stranger"; // If name is falsy it will print stranger
   console.log("Hi", message);
}

processName1(""); // So this is going to print "Hi stranger"

function processName2(name?: string | null) {
   // If we wanted the empty string to be consider as a truthy value, we would need to use the "??" operator
   const message = name ?? "stranger"; // If name is not null or undefined, it will take "stranger"
   console.log("Hi", message);
}

processName2(""); // So this is going to print just "Hi"
processName2("Andrew");
