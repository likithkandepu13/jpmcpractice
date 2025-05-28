// ForEach, Map, Arrow Functions, fillers , reduce etc,,,

//forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number * 2); // Outputs each number multiplied by 2
});

// map method
const doubledNumbers = numbers.map((number) => {
    return number * 2; // Returns a new array with each number multiplied by 2
}); 
// it returns a new array
console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]

// filler method
const filledArray = new Array(5).fill(0); // Creates an array of length 5 filled with 0
console.log(filledArray); // Outputs: [0, 0, 0, 0, 0]
// method that is used to fill an array with a specific value

//filter method
const filteredNumbers = numbers.filter((number) => {
    return number > 2; // Returns a new array with numbers greater than 2
});

//reduce method
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Sums up all the numbers in the array
}, 0); // Initial value is 0


//-------------------------------------------------------------------------------------------

// setTimeout and setInterval:
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000); // Executes the function after 2000 milliseconds (2 seconds)

setInterval(() => {
    console.log("This message is displayed every 3 seconds");
}, 3000); // Executes the function every 3000 milliseconds (3 seconds)