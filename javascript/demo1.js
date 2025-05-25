// here now we discuss about the variables in javascript
// variables are used to store data
let name = "John"; // string
let age = 30; // number 
let isStudent = true; // boolean
let height = 5.9; // float
let hobbies = ["reading", "gaming", "coding"]; // array
// object
let person = {
    name: "John",
    age: 30,
    isStudent: true,
    height: 5.9,
    hobbies: ["reading", "gaming", "coding"]
};
// premitive data types
let x = 10; // number
let y = "Hello"; // string
let z = true; // boolean
// non-premitive data types
let arr = [1, 2, 3, 4, 5]; // array
let obj = {
    name: "John",
    age: 30
}; // object
// undefined
let a; // undefined
// null
let b = null; // null
// symbol
let sym = Symbol("unique"); // symbol
// BigInt
let bigInt = BigInt(123456789012345678901234567890); // BigInt
// console.log the variables
console.log("Name:", name);
//typeof operator
console.log("Type of name:", typeof name);
console.log("Age:",typeof age);

//-----------------------------------------

// vriables and constants
// we have : var, let, const
// var is function scoped, let and const are block scoped
var globalVar = "I am a global variable"; // can be redeclared and updated
let blockScopedLet = "I am a block scoped variable"; // can be updated but not redeclared in the same scope
const blockScopedConst = "I am a block scoped constant"; // cannot be updated or redeclared

// ++i vs i++
let i = 0;
console.log("Pre-increment:", ++i); // increments i before using it
console.log("Post-increment:", i++); // uses i before incrementing it
console.log("Current value of i:", i); // shows the current value after post-increment
// Output:
// Pre-increment: 1
// Post-increment: 1
// Current value of i: 2

// variables can change their type 
let dynamicVar = 10; // initially a number
dynamicVar = "Now I am a string"; // now a string
console.log("Dynamic variable:", dynamicVar); // Output: Now I am a string
typeof dynamicVar; // "string"

//-----------------------------------------------------------

//strings 
// strings are used to store text
let greeting = "Hello, World!";
// string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"
// template literals (ES6 feature)
let ageString = `My name is ${firstName} and I am ${age} years old.`; // "My name is John and I am 30 years old."
// string methods
console.log("Length of greeting:", greeting.length); // 13
console.log("Uppercase greeting:", greeting.toUpperCase()); // "HELLO, WORLD!"
console.log("Lowercase greeting:", greeting.toLowerCase()); // "hello, world!"
console.log("Substring of greeting:", greeting.substring(0, 5)); // "Hello"
console.log("Index of 'World' in greeting:", greeting.indexOf("World")); // 7
console.log("Replace 'World' with 'JavaScript':", greeting.replace("World", "JavaScript")); // "Hello, JavaScript!" 
console.log("Split greeting into words:", greeting.split(" ")); // ["Hello,", "World!"]
// Escape characters
let escapedString = "He said, \"Hello!\""; // "He said, "Hello!""
console.log("Escaped string:", escapedString); // Output: He said, "Hello!"
// Multiline strings (using template literals)
let multilineString = `This is a string
that spans multiple lines.`;
console.log("Multiline string:", multilineString);
// Output:
// This is a string
// that spans multiple lines.
// trim() method
let spacedString = "   Hello, World!   ";
console.log("Trimmed string:", spacedString.trim()); // "Hello, World!"

// template literals
let mes = `Hello, ${firstName} ${lastName}!`; // "Hello, John Doe!"
console.log("Template literal message:", mes); // Output: Hello, John Doe!


