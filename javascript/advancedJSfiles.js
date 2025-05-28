
// Advanced JavaScript Concepts
// spread operator
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
// Using the spread operator to combine arrays
const combinedNumbers = [...numbers, ...moreNumbers];
console.log(combinedNumbers); // Outputs: [1, 2, 3, 4, 5, 6]
// Using the spread operator to copy an array
const copiedNumbers = [...numbers];
console.log(copiedNumbers); // Outputs: [1, 2, 3]
// Using the spread operator to pass arguments to a function
function sum(a, b, c) {
    return a + b + c;
}
const args = [1, 2, 3];
console.log(sum(...args)); // Outputs: 6

// Using the spread operator to merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };

// rest parameter

function multiply(...args) {
    return args.reduce((acc, curr) => acc * curr, 1); // Multiplies all arguments
}