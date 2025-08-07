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