//loops in javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}
// while loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}
// do-while loop
let k = 0;
do {
    console.log("Do-While Loop Iteration:", k);
    k++;
}
// for...of loop
const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log("For...of Loop Value:", value);
}
// for...in loop
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log("For...in Loop Key:", key, "Value:", object[key]);
}
// forEach loop
array.forEach((value, index) => {
    console.log(`ForEach Loop Index: ${index}, Value: ${value}`);
});
// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log("First Element:", first); // Output: 1