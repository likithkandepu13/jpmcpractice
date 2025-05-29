//promises
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// a promise can be in one of three states: pending, fulfilled, or rejected
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const success = true; // Change to false to simulate failure
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result); // This will run if the promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // This will run if the promise is rejected
  })
  .finally(() => {
    console.log("Promise has settled (either fulfilled or rejected).");
  });

  //----------------------------------------

  // Example of using Promise.all to handle multiple promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Result 2"), 1500));

//async function to handle multiple promises
async function handleMultiplePromises() {
  try {
    const results = await Promise.all([promise1, promise2]);
    console.log("All promises resolved:", results);
  } catch (error) {
    console.error("One or more promises failed:", error);
  }
}