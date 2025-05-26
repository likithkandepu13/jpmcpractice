// js decesion making
// array methods 
// shift unshit push pop
const numbers = [1, 2, 3, 4, 5];
// shift removes the first element from an array and returns that removed element
const firstElement = numbers.shift();
console.log("First Element:", firstElement); // Output: 1
// unshift adds one or more elements to the beginning of an array and returns the new length of the array
numbers.unshift(0);
console.log("After Unshift:", numbers); // Output: [0, 2, 3, 4, 5]
// push adds one or more elements to the end of an array and returns the new length of the array
numbers.push(6);
console.log("After Push:", numbers); // Output: [0, 2, 3, 4, 5, 6]
// pop removes the last element from an array and returns that removed element
const lastElement = numbers.pop();
console.log("Last Element:", lastElement); // Output: 6
// Array methods: map, filter, reduce
const numbers2 = [1, 2, 3, 4, 5];
// map creates a new array populated with the results of calling a provided function on every element in the calling array
const doubled = numbers2.map(num => num * 2);
console.log("Doubled:", doubled); // Output: [2, 4, 6, 8, 10]
// filter creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]
// reduce executes a reducer function on each element of the array, resulting in a single output value
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum); // Output: 15

let nums = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
nums= nums.concat(nums2);
console.log("Concatenated Array:", nums); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// slice extracts a section of an array and returns it as a new array
const slicedArray = nums.slice(2, 5);
console.log("Sliced Array:", slicedArray); // Output: [3, 4, 5]
// splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const splicedArray = nums.splice(2, 3, 11, 12);
console.log("Spliced Array:", splicedArray); // Output: [3, 4, 5]
console.log("After Splice:", nums); // Output: [1, 2, 11, 12, 6, 7, 8, 9, 10]
// forEach executes a provided function once for each array element
nums.forEach((num, index) => {
    console.log(`Element at index ${index}: ${num}`);
});
// find returns the value of the first element in the array that satisfies the provided testing function
const foundElement = nums.find(num => num > 5);
console.log("Found Element:", foundElement); // Output: 6
// findIndex returns the index of the first element in the array that satisfies the provided testing function
const foundIndex = nums.findIndex(num => num > 5);
console.log("Found Index:", foundIndex); // Output: 4
// includes determines whether an array includes a certain value among its entries, returning true or false as appropriate
const includesSix = nums.includes(6);
console.log("Includes 6:", includesSix); // Output: true
// indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present
const indexOfEight = nums.indexOf(8);
console.log("Index of 8:", indexOfEight); // Output: 6
// lastIndexOf returns the last index at which a given element can be found in the array, or -1 if it is not present
const lastIndexOfTen = nums.lastIndexOf(10);
console.log("Last Index of 10:", lastIndexOfTen); // Output: 9
// join joins all elements of an array into a string
const joinedString = nums.join(", ");
console.log("Joined String:", joinedString); // Output: "1, 2, 11, 12, 6, 7, 8, 9, 10"
// reverse reverses the elements of an array in place
const reversedArray = nums.reverse();
console.log("Reversed Array:", reversedArray); // Output: [10, 9, 8, 7, 6, 12, 11, 2, 1]
// sort sorts the elements of an array in place and returns the sorted array
const sortedArray = nums.sort((a, b) => a - b);
console.log("Sorted Array:", sortedArray); // Output: [1, 2, 6, 7, 8, 9, 10, 11, 12]
// fill fills all elements of an array from a start index to an end index with a static value
const filledArray = nums.fill(0, 2, 5);
console.log("Filled Array:", filledArray); // Output: [1, 2, 0, 0, 0, 9, 10, 11, 12]


