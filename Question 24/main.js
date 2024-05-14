"use strict";
// Define Variables
let apple = "apple";
let upparcaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Test for equality and unequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
// Tests using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upparcaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(upparcaseApple.toLowerCase() != "apple");
// Numerical tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < ten);
// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is Less than or equal to 10?");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
console.log("\n Twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n Twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test weather an item is include in array
console.log("\n Is orange include in my Fruits array");
console.log(fruits.includes("orange"));
console.log("\n Is orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
