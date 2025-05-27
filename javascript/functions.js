// java script functions

function funcName(){
    // Function logic goes here
    console.log("Function executed");
}
// basics syntax

function add(a, b) {
    // This function adds two numbers
    return a + b;
}
add(5, 3); // Returns 8

function subtract(a, b) {
    // This function subtracts the second number from the first
    return a - b;
}
// arrow functions  
const multiply = (a, b) => {
    // This function multiplies two numbers
    return a * b;
};
multiply(4, 2); // Returns 8
const divide = (a, b) => {
    // This function divides the first number by the second
    return a / b;
};

// function expression
const add = function(a, b) {    
    // This function adds two numbers
    return a + b;
}
add(5, 3); // Returns 8

// higher order functions
function higherOrderFunction(callback) {
    // This function takes another function as an argument
    return callback();
}
higherOrderFunction(() => {
    // This is the callback function
    return "Callback executed";
}
); // Returns "Callback executed"
// IIFE (Immediately Invoked Function Expression)
(function() {
    // This function runs immediately
    console.log("IIFE executed");
})();
// function with default parameters
function greet(name = "Guest") {
    // This function greets a person, defaulting to "Guest" if no name is provided
    return `Hello, ${name}!`;
}

//methods in functions
function person(name, age) {
    // This function creates a person object
    this.name = name;
    this.age = age;
    this.introduce = function() {
        // This method introduces the person
        return `My name is ${this.name} and I am ${this.age} years old.`;
    };
}  
const john = new person("John", 30);
console.log(john.introduce()); // Returns "My name is John and I am 30 years old."

// methods 

const math = {
    multiply: function(a, b) {
        // This method multiplies two numbers
        return a * b;
    },
    divide: function(a, b) {
        // This method divides the first number by the second
        return a / b;
    },
    add: function(a, b) {
        // This method adds two numbers
        return a + b;
    }
}
console.log(math.multiply(4, 2)); // Returns 8
console.log(math.divide(8, 2)); // Returns 4
console.log(math.add(5, 3)); // Returns 8


// 'this' in method 
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails: function() {
        // This method returns the car's details
        return `${this.year} ${this.make} ${this.model}`;
    }
};
const myCar = car.getDetails();
console.log(myCar); // Returns "2020 Toyota Corolla"
car.mode= "Camry"; // Changing the model
console.log(car.getDetails()); // Returns "2020 Toyota Camry"
// 'this' in function
function showThis() {
    // This function logs the value of 'this'
    console.log(this);
}
showThis(); // In a non-strict mode, this will refer to the global object (window in browsers)
// 'this' in arrow function
const showThisArrow = () => {
    // This arrow function logs the value of 'this'
    console.log(this);
};
showThisArrow(); // In an arrow function, 'this' refers to the lexical scope, not the global object

//---------------------------------------------

// try catch in JS
function riskyFunction() {
    // This function may throw an error
    throw new Error("Something went wrong!");
}
try {
    riskyFunction();
}
catch (error) {
    // This block handles the error
    console.error("Error caught:", error.message);
}