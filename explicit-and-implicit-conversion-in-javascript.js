/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); // this is fine

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

/*
I honestly can't tell if the expected output is true or false. 
But I know since Boolean("false") is truthy, the command will run.
I'm interpreting this as working properly.
*/

let age = Number("25"); //converted "25" by adding Number()
let totalAge = age + 5; // the + otherwise makes this a string concatenation
console.log("Total Age: " + totalAge); // now the output should be 30 instead of 255

if (null) { // implicitly converted to boolean
  console.log("This is falsy");
}

let eulerNumber = 2.71828;
console.log("Euler's number rounded down: " + parseInt(eulerNumber)); // explicitly converted to an integer