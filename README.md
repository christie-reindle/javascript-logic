# javascript-logic
[Beginner] - JS - Logic, Conditionals, Operators

JavaScript is a **programming language** that executes a computer program given a list of **statements** developed from a programmer. JavaScript statements are composed of: values, expressions, comments, operators, and keywords. 

## Values
- Numbers are written with or without decimals
- Strings are text, written within double or single quotes

## Expressions
An **expression** is a combination of values, variables, and oeprators, which computes to a value. Computing a value is called an evaluation.
```
5 * 10; // This evaluates to 50
```

## Comments in JavaScript
- Any text between a `//` and the end of a line is treated as a comment and is ignored by JavaScript
- Any text between the characters /* and */ is treated as a comment. This may span multiple lines.

The following examples shows how to use comments in JavaScript.
```
// This is a comment. 
console.log("This statement will be executed");
/*
* And this is a multiline comment in JavaScript
*/
```

## Operators
JavaScript supports the following types of operators:
- Arithmetic Operators
   * Addition (+)
   * Subtraction (-)
   * Multiplication (*)*
   * Division (/)
   * Modulus (%)
   * Increment (++)
   * Decrement (--)
- Comparison Operators (These return a **boolean** value of *true* or *false*)
   * Strict Equal (===)
   * Not Equal (!==)
   * Greater Than (>)
   * Less Than (<)
   * Greater than or Equal to (>=)
   * Less than or Equal to (<=)
   
- Logical (or Relational) Operators
  * And (&&) - If both the operands satisfy the statment, then the condition becomes true
  * Or (||) - If any of the two operands satisfy the statement, then the condition becomes true.
  * Not (!) - Reverses the logical state of its operand.
  
- Assignment Operators
  * =
  * +=
  * -=
  * *=
  * /=
  * %=

### Arithmetic Operators
Arithmetic operators are used to perform arithmetic between variables and/or values and compute values.

```
var a = 4;
var b = 2;

// Addition (+) - Adds two operands
console.log(a + b); // This will print 6

// Subtraction (-) - Subtracts the second operand from the first
console.log(a - b); // This will print 2

// Multiplication (*) - Multiply both operands
console.log(a * b); // This will print 8

// Division (/) - Divide the numerator by the denominator
console.log(a / b); // This will print 2

// Modulus (%) - Outputs the remainder of an integer division
console.log(a % b); // This will print 0

// Increment (++) - Increases an integer value by one
console.log(a++); //This will print 5

// Decrement (--); - Decreases an integer value by one
console.log(b--); // This will print 1

/*
* Note: Addition operator (+) works for Numeric as well as Strings, but we will get into that later :)
*/
```

### Comparison Operators Examples
Comparison operators are used in logical statements to determine equality or difference between variables or values.

```
var a = 10;
var b = 20;

/*
* Strict Equal (===)
* Checks if the value of two operands are equal in data type and value.
* If yes, then the condition becomes true. Else, the condition is false.
*/
console.log(a === b); // This will print false

/*
* Not Equal (!==)
* Checks if the value of two operands are equal in data type and value.
* If the values are not equal, then the condition becomes *true*. Else, the condition is *false*
*/
console.log(a !== b); // This will print true

/*
* Greater Than (>)
* Checks if the left operand is greater than the value of the right operand.
* If yes, then the condition becomes true. Else, the condition is false.
*/
console.log(a > b); // This will print false

/*
* Less Than (<)
* Checks if the value of the left operand is less than the value of the right operand.
* If yes, then the condition becomes true. Else, the condition is false.
*/
console.log(a < b); // This will print true
 
/*
* Greater than or Equal to (>=)
* Checks if the value of the left operand is greater than or equal to the value of the right operand.
* If yes, then the condition becomes true. Else, the condition is false.
*/
console.log(a >= b); // This will print false
 
/*
* Less than or Equal to (<=)
* Checks if the value of the left operand is less than or equal to the value of the right operand.
* If yes, then the condition becomes true. Else, the condition is false.
*/
console.log(a <= b); // This will print true

```
 
### Logical (or Relational) Operators
Logical operators are used to determine the logic between variables or values.

```
var burger = 1;
var pickles = 1;
//And (&&)
console.log(burger > 0 && pickles < 1); // This will print false

//Or (||)
console.log(burger === 5 || pickles === 5); // This will print

//Not (!)
console.log(!burger === 1); This will print false
```

### Assignment Operators
Assignment operators are used to assign values to JavaScript variables

```
var dog = "woof";
var cat = "meow";
var firstNum = 5;
var secondNum = 10;
/*
* Operator: =
* Same as: x = y
*/
cat = dog;
console.log(cat); // This will print "woof"

/*
* Operator: +=
* Same as: x = x + y
*/
cat += dog;
console.log(cat); // This will print "meowwoof"

/*
* Operator: -=
* Same as: x = x - y
*/
cat -= dog;
console.log(cat); // This will give an error, ["NaN"](https://www.w3schools.com/jsref/jsref_isnan.asp)

secondNum -= firstNum;
console.log(secondNum); // This will print 5

/*
* Operator: *=
* Same as: x = x * y
*/
cat *= dog;
console.log(cat); // This will give an error, ["NaN"](https://www.w3schools.com/jsref/jsref_isnan.asp)

secondNum *= firstNum;
console.log(secondNum); // This will print 50

/*
* Operator: /=
* Same as: x = x / y
*/
cat /= dog;
console.log(cat); // This will give an error, ["NaN"](https://www.w3schools.com/jsref/jsref_isnan.asp)

secondNum /= firstNum;
console.log(secondNum); // This will print 2

/*
* Operator: %=
* Same as: x = x % y
*/
cat %= dog;
console.log(cat); // This will give an error, ["NaN"](https://www.w3schools.com/jsref/jsref_isnan.asp)

secondNum %= firstNum;
console.log(secondNum); // This will print 0
```

## JavaScript in External File
The **script** tag allows you to store JavaScript in an external file and then include it into your HTML files.

Here is an example to show how you can include an external JavaScript file in your HTML code using **script** tag and its **src** attribute.

```
<html>

   <head>
      <script type="text/javascript" src="filename.js" ></script>
   </head>
   
   <body>
      .......
   </body>
</html>
```

## Summary
- Variables are used to store data **values** and is created in JavaScript using the **var** keyword to **declare** variables.
- An **equal sign** is used to **assign values** to variables. Otherwise, the value of the unassigned variable is undefined.
- An **expression** is a combination of values, variables, and oeprators, which computes to a value. Computing a value is called an evaluation.
- **Keywords** are used to identify actions to be performed by the computer
- **Comments** are JavaScript statements that are not executed
- JavaScript is case sensitive

### Resources
1. [JavaScript Comments](https://www.w3schools.com/js/js_comments.asp)
2. [W3Schools - JavaScript Operators](https://www.w3schools.com/jsref/jsref_operators.asp)
3. [TutorialsPoint - JavaScript Operators](https://www.tutorialspoint.com/javascript/javascript_operators.htm)
4. [TutorialsPoint - JavaScript - Placement in HTML File](https://www.tutorialspoint.com/javascript/javascript_placement.htm)
5. [Keywords - JavaScript Reserved Words](https://www.w3schools.com/js/js_reserved.asp) 
