// 1. Ways to print in JS
// console.log("Hello World");
// alert("me");
// document.write("THis is document writer")



// Javascript console API(Application Programming Interface)
// console.log("Hello World!", 4 + 4, "Another LOg");
// console.warn("Warninggg");
// console.error("Errorrrr");



// 3.JS Variables
//What are variables? -  Containers to store data values

var number1 = 34;
var number2 = 56;
console.log(number1 +number2);

// 4. Data type in JS

// Numbers 
var num1 = 455;
var num2 = 56.76;

// String  
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects 
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}

console.log(marks)

// Booleans
var a = true;
var b = false;

console.log(a,b);

// var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive Data types: undefined, null, number, string, boolean, symbol
2. Reference Data types: Arrays and Objects


*/

var arr = [1,2,"String",4,5];

// Operaters in Js
// Arithmetic Operators
var a = 34;
var b = 56;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a/b is ",a/b);
// console.log("The value of a*b is ",a*b);

// Assignment Operators
var c = b;
// c+=2;

// Comparison Operators 
var x = 34;
var y = 56;
// console.log( x==y );
// console.log( x<=y );
// console.log( x>=y );
// console.log( x>y );
// console.log( x<y );

// Logical Operators

// Logical AND

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical OR

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT
console.log(!false);
console.log(!true);


