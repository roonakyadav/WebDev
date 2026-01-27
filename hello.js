let coinTossPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Heads");
    } else {
      reject("Tails");
    }
  }, 1000);
});

// Explanation of this whole block:
// This code creates a new Promise called coinTossPromise. 
// Inside the promise, we use setTimeout to simulate an asynchronous operation that takes 1 second (1000 milliseconds).
// After the delay, we generate a random number using Math.random().
// If the random number is greater than 0.5, we call resolve with the value "Heads", indicating a successful outcome.
// If the random number is less than or equal to 0.5, we call reject with the value "Tails", indicating a failure outcome.
// This simulates a coin toss where there is a 50% chance of getting heads or tails.

coinTossPromise
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

