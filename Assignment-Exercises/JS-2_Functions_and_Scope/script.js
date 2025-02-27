/********************
 Step 1: Create Global Variables
 - Create two global variables (e.g., globalVar, anotherGlobalVar).
 - Assign any values you like.
********************/

let globalVar = "Togekiss"
let anotherGlobalVar = "Dragonite";

/********************
 Step 2: Create a Function to Demonstrate Function Scope
 - Define a function (e.g., demoFunctionScope).
 - Inside this function:
   1. Declare a local variable (e.g., localVar).
   2. Log both the global variable(s) and the local variable to the console.
   3. Return a string that includes both the global and local variables.
********************/

function demoFunctionScope(){

  let localVar = "Feebas";

  console.log(`globalVar: ${globalVar}\n
               anotherGlobalVar: ${anotherGlobalVar}\n
               localVar: ${localVar}`);

  return "Function executed successfully!";
}

/********************
 Step 3: Call the Function and Log Its Return Value
 - Call your function from Step 2 and store its result in a variable.
 - Use console.log() to display the return value in the console.
********************/

console.log("===== Step 3 =====");

demoFunctionScope();

if(true){ // I based this one on number 3 of the README.md.
  let blockVar = "Magikarp";

  console.log(`blockVar within If: ${blockVar}`);
}

// Returns an error = I commented because it cuts off my outputs.
// console.log(`blockVar outside If: ${blockVar}`); 

/********************
 Step 4: Demonstrate Block Scope
 - Write an if statement that always executes (if (true) { ... }).
 - Inside this block:
   1. Use let to declare a block-scoped variable (e.g., blockVar).
   2. Log the block-scoped variable within the block.
 - Try logging the same variable outside the block and observe what happens.
********************/

console.log("===== Step 4 =====");

console.log("Return Value: ", demoFunctionScope());