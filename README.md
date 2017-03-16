# javascript-logic
[Beginner] - JS - Logic, Conditionals, Operators

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
   * Addition (+) - Adds two operands
   * Subtraction (-) - Subtracts the second operand from the first
   * Multiplication (*)* - Multiply both operands
   * Division (/) - Divide the numerator by the denominator
   * Modulus (%) - Outputs the remainder of an integer division
   * Increment (++) - Increases an integer value by one
   * Decrement (--); - Decreases an integer value by one
- Comparison Operators
These return a **boolean** value of *true* or *false*
   * Strict Equal (===) - Checks if the value of two operands are equal in data type and value or not, if yes, then the condition becomes *true*. Else, the condition is *false*.
   * Not Equal (!=) - Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes *true*. Else, the condition is *false*.
   * Greater Than (>) - Checks if the left operand is greater than the value of the right operand, if yes, then the condition becomes *true*. Else, the condition is *false*.
   * Less Than (<) - Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes *true*. Else, the condition is *false*.
   * Greater than or Equal to (>=) - Checks if the value of the left operand is greater than or equal to the value of the right oeprand, if yes, then the condition becomes *true. Else, the condition is *false*.
   * Less than or Equal to (<=) - Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes *true*. Else, the condition is *false*.
   
- Logical (or Relational) Operators
- Assignment Operators

### Arithmetic Operators

```
var a = 4;
var b = 2;

// Addition (+) - Adds two operands
console.log(a + b); // This will give 6

// Subtraction (-) - Subtracts the second operand from the first
console.log(a - b); // This will give 2

// Multiplication (*) - Multiply both operands
console.log(a * b); // This will give 8

// Division (/) - Divide the numerator by the denominator
console.log(a / b); // This will give 2

// Modulus (%) - Outputs the remainder of an integer division
console.log(a % b); // This will give 0

// Increment (++) - Increases an integer value by one
console.log(a++); //This will give 5

// Decrement (--); - Decreases an integer value by one
console.log(b--); // This will give 1

/*
* Note: Addition operator (+) works for Numeric as well as Strings, but we will get into that later :)
*/
```

### Comparison Operators


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
