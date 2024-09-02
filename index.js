// This is my first JS code
// console.log('Hello World');

// ----------------------------------------------------------- VARIABLES --------------------------------------------------------------------------------------------
// Previously in the old days before ES6, we use the VAR keyword to declare a variable. But there are issues with VAR keyword. 
// Best practice is to use LET (as of now)
// let name = 'Sai'; // let <variable_name>. Default value : undefined
// console.log(name);

// RULES OF DECLARING A VARIABLE
// Cannot be a reserved keyword
// Should be meaningful and descriptive
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case-sensitive
// Moder best practice is to declare variables line by line and not at once

// let firstName = 'Sai', lastName;
// console.log(firstName);


// ----------------------------------------------------------- CONSTANTS --------------------------------------------------------------------------------------------
// In the real world, there are instances where you don't want the values of your variables to change. Solution ---> Constants.
// const interestRate = 0.3;
// console.log(interestRate);


// ----------------------------------------------------------- PRIMITIVE / VALUE TYPES --------------------------------------------------------------------------------------------
// let name = 'Samira'; // String literal
// let age = 21; // Number literal
// let isApproved = true; // Boolean literal - true / false
// let firstName = undefined; // default value 
// let selectedColor = null;
// In ES6, we also have another primitive type called 'symbol'


// ----------------------------------------------------------- typeof KEYWORD --------------------------------------------------------------------------------------------
// console.log(typeof name);


// ----------------------------------------------------------- REFERENCE TYPE : OBJECT --------------------------------------------------------------------------------------------
// let person = {
//     name : 'Sai',
//     age : 21
// };
// console.log(person);

// Accessing properties of the object
// 1) Dot Notation
// person.name = 'Aquina';
// console.log(person.name);
// 2) Bracket Notation
// person['name'] = 'Aurelia';
// console.log(person['name']);


// ----------------------------------------------------------- REFERENCE TYPE : ARRAYS (Data structure used to represent a list of items) --> TYPE : OBJECT --------------------------------------------------------------------------------------------
// each element has an index which determines the position of the element in the array.
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green'; // Length of the array is dynamic.
// console.log(selectedColors);
// we can have a mix of element types within the array:
// selectedColors[3] = 100;
// console.log(selectedColors);

//DOT NOTATON
// console.log(selectedColors.length);


// ----------------------------------------------------------- REFERENCE TYPE : FUNCTIONS --------------------------------------------------------------------------------------------
// a set of statements that performs a task or calculates a value.

// Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}


// ----------------------------------------------------------- TYPES OF FUNCTIONS --------------------------------------------------------------------------------------------
// Calculating a value
function square(number) {
    return number*number;
}

console.log(square(2));