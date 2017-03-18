/*
* What do these expressions evaluate to? 
* Run your program in the terminal using the command `node app.js`
* Check your answers using console.log();
*/

/*
* Arithmetic Operators
*/

// Addition (+)
console.log(5 + 9);// 14

console.log("one" + "one");// 'oneone'

// Subtraction (-)
console.log(8 - 20); // -12

// Multiplication (*)
console.log(2 * 0); //0

// Division (/)
console.log(15/50); //0.3

// Modulus (%)
console.log(5 % 2); // 1

// Increment (++)
//2++; // This is invalid
var a = 2;
a++;
console.log("Increment 2", a);

//-1++; // This is invalid
var b = -1;
b++;
console.log("Increment -1", b);

// Decrement (--)
//5--; // This is invalid
 var c = 5;
 c--;
 console.log("Decrement 5" + c);

/*
* Comparison Operators (These return a boolean value of true or false)
* For those with the boolean answer false, change the expression to evaluate to true
*/

// Strict Equal (===)
console.log(5 === "five"); // 5 === 5, gives true

// Not Equal (!==)
console.log(5!== "five"); // true

// Greater Than (>)
console.log(5 > 10); // false - 5 > 1, gives true

// Less Than (<)
console.log("20" < 20); // false - 19 < 20, gives true

// Greater than or Equal to (>=)
console.log(undefined >= null); // false - null >= null, gives true

// Less than or Equal to (<=)
console.log(null <= null); // true

/*
* Logical (or Relational) Operators
*/

// And (&&) - If both the operands satisfy the statment, then the condition becomes true
console.log(1 > 0 && 1 < 0); // false - 1 > 0 && 1 < 0, true

// Or (||) - If any of the two operands satisfy the statement, then the condition becomes true.
console.log(2 > 0 || 2 > 20); // true

// Not (!) - Reverses the logical state of its operand.
console.log(!true); // false - !false gives true

/*
* Conditionals
* Using the variables given to you, create if, else, and else if statements
*/
var a = "apple";
var b = 2;
console.log(a); 
console.log(b); 