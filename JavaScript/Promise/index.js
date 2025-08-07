// Simple JavaScript Promise example
const myPromise = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise.then((res)=>console.log(res)).catch(err=>console.error(err));
// This code creates a promise that resolves if the operation is successful and rejects otherwise.
// The `then` method is used to handle the resolved value, while `catch` handles the error.
// The output will be "Operation was successful!" if the promise resolves successfully.
// If the promise is rejected, it will log "Operation failed!" to the console.
// This is a basic example of how to use promises in JavaScript for asynchronous operations.
// Promises are a way to handle asynchronous operations in JavaScript, allowing you to write cleaner


// handle promise with error handling
const anotherPromise = new Promise((resolve, reject) => {
  const isError = false;
  if (isError) {
    reject("An error occurred!");
  } else {
    resolve("Everything went fine!");
  }
});

anotherPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
// In this example, we create another promise that either resolves with a success message or rejects with an        
// error message. The `then` method is used to handle the success case, while the `catch` method handles the error case.

// //Implement Promise chaining with multiple asynchronous tasks.
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task 1 complete');
      resolve(1);
    }, 1000);
  });
}

function task2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task 2 complete, received input: ${input}`);
      resolve(input + 2);
    }, 1000);
  });
}

function task3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task 3 complete, received input: ${input}`);
      resolve(input * 3);
    }, 1000);
  });
}

// Promise chaining
task1()
  .then(result1 => {
    return task2(result1);
  })
  .then(result2 => {
    return task3(result2);
  })
  .then(finalResult => {
    console.log(`Final result: ${finalResult}`); // Should log 9 ((1 + 2) * 3)
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });


// Simulate asynchronous tasks with Promises

// Write a basic Promise that resolves or rejects based on a condition.

// Implement Promise chaining with multiple asynchronous tasks.

// Demonstrate error handling in a Promise chain.

// Write code to convert a callback-based function to return a Promise.

// Implement your own version (polyfill) of Promise.all or Promise.race.

// Use Promise.allSettled to handle multiple Promises and report their results regardless of fulfillment or rejection.

// Write a Promise that simulates a delay (using setTimeout) and resolves after the delay.

// Handle parallel asynchronous tasks with different durations and return results in order.

// Implement a mechanism to cancel or timeout a running Promise.

// Rewrite Promise chains using async/await syntax.

// Debug a Promise chain and explain common debugging techniques.

// Write test cases for functions returning Promises.

// Write a Promise that sometimes resolves and sometimes rejects randomly.

// Design a complex asynchronous flow using Promise chaining or composition.
