Q.What is Promises?
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that may not yet be available, enabling you to write cleaner, more manageable asynchronous code without deeply nested callbacks.

Unique, Interview-Ready Definition:-
A JavaScript Promise is a structured object that serves as a commitment to return a single result (either a value or an error) from an asynchronous operation, transitioning seamlessly between pending, fulfilled (resolved), or rejected states. This construct allows developers to link producing and consuming code, ensuring asynchronous actions are handled in a predictable, chainable, and readable manner.

States of a Promise:

1.Pending: The initial state, neither fulfilled nor rejected.
2.Fulfilled: Operation completed successfully, resulting in a value.
3.Rejected: Operation failed, resulting in an error.

Example:
const myPromise = new Promise((resolve, reject) => {
  // asynchronous logic here
  if (/* success condition */) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});

myPromise
  .then(result => console.log(result))    // Handle fulfillment
  .catch(error => console.error(error));  // Handle rejection


Key Properties:

1.Promises help avoid "callback hell" and enable chaining of multiple asynchronous actions via .then() and .catch() methods.
2.Once a Promise settles (fulfilled or rejected), it cannot transition to another state.

Q.How can I handle errors when working with Promise chaining

To handle errors in JavaScript Promise chaining, you typically use the .catch() method at the end of your promise chain. This method catches any error that occurs at any point in the chain, so you don’t have to handle errors at each individual step unless desired.

How Error Handling Works in Promise Chains:

1.When a promise in the chain is rejected (either explicitly with reject or by throwing an error), control immediately jumps to the nearest .catch() handler down the chain, skipping any remaining .then() handlers.
2.Placing .catch() at the end of the chain is the most common and reliable way to ensure that all errors are handled

Q.What is the best way to catch errors in a Promise chain without missing any step

The best way to catch errors in a Promise chain without missing any step is to attach a single .catch() method at the end of your chain. This ensures that any error—whether due to a rejected promise or an exception thrown at any step—will be caught and handled, similar to how a try/catch block works for synchronous code.

Q.How does Promise chaining work?
Ans

Q.What is the difference between Promise.all and Promise.allSettled?
Answer:

Promise.all waits for all promises to resolve. If any promise rejects, it rejects immediately with that reason, and the rest are ignored. Use it when all operations must succeed.

Promise.allSettled waits for all promises to complete, regardless of whether they are fulfilled or rejected, returning an array of result objects with the status and value/reason of each. Useful when you want the outcome of all promises without failing early.


Q.Implement a Promise that resolves after a delay (simulate async).
function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(`Resolved after ${ms}ms`), ms));
}

delay(1000).then(console.log); // Logs after 1 second

Q.7. Convert a callback-based function to return a Promise.
function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data fetched");
  }, 1000);
}

convert to promise:
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    fetchData((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

fetchDataPromise().then(console.log).catch(console.error);


Q.What is the difference between Promise.resolve() and Promise.reject()?
The difference between Promise.resolve() and Promise.reject() in JavaScript is as follows:

1.Promise.resolve(value) creates and returns a new Promise object that is resolved (fulfilled) with the given value. If the value is already a Promise, it simply returns that Promise. It is used to explicitly create a Promise that has successfully completed with a value.

2.Promise.reject(reason) creates and returns a new Promise object that is rejected with the given reason (typically an error). Unlike Promise.resolve, it always returns a new rejected Promise, even if the reason is already a Promise. It is used to explicitly create a Promise that has failed with an error or some rejection reason.

Q.What are Promise combinators like Promise.all, Promise.race, Promise.allSettled, and Promise.any? How do they differ?

Promise combinators like Promise.all, Promise.race, Promise.allSettled, and Promise.any are static methods on the Promise object that allow handling multiple promises concurrently, but they differ in their behavior around resolution and rejection.

Here’s a detailed explanation of each and how they differ:

1. Promise.all(iterable)
a.Takes an iterable (usually an array) of promises.
b.Returns a single Promise that:
  i)-Resolves when all input promises resolve, with an array of their resolved values, maintaining the original order.
  ii)-Rejects immediately if any input promise rejects, with the rejection reason of the first promise that rejects.
c.Use it when you want all asynchronous operations to complete successfully before continuing.
d.If the iterable is empty, it resolves immediately with an empty array.

2. Promise.race(iterable)
1.Takes an iterable of promises.
2.Returns a Promise that settles as soon as any of the input promises settles (resolves or rejects).
3.The returned Promise adopts the state and value/reason of the first settled promise.
4.Use it when you want to react to the fastest promise, regardless of success or failure (like a timeout or competition).

3. Promise.allSettled(iterable)
1.Takes an iterable of promises.
2.Returns a Promise that resolves when all input promises have settled (either fulfilled or rejected).
3.The resolved value is an array of objects, each describing the outcome of each promise with a status ("fulfilled" or "rejected") and value or reason.
4.Use it when you want the outcome of all promises, regardless of whether they were successful or not.

4. Promise.any(iterable)
a.Takes an iterable of promises.
b.Returns a Promise that:
i)-.Resolves as soon as any one of the input promises resolves, with the value of that fulfilled promise.
ii)-.Rejects only if all input promises reject, with an AggregateError containing all rejection reasons.
c-Use it when you only care about one successful result and want to ignore errors unless all fail.

Example:
const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Error 2");
const p3 = new Promise(res => setTimeout(res, 100, "Success 3"));

// Promise.all - rejects immediately if one rejects
Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(err => console.error("Promise.all error:", err));

// Promise.race - settles as soon as one settles, success or failure
Promise.race([p1, p2, p3])
  .then(value => console.log("Promise.race resolved:", value))
  .catch(error => console.error("Promise.race rejected:", error));

// Promise.allSettled - waits for all to settle, success or failure
Promise.allSettled([p1, p2, p3])
  .then(results => console.log("Promise.allSettled results:", results));

// Promise.any - resolves as soon as one fulfills, rejects only if all reject
Promise.any([p2, p3])
  .then(value => console.log("Promise.any resolved:", value))
  .catch(error => console.error("Promise.any error:", error));


Q.What is the event loop’s role in Promise execution?
The event loop in JavaScript plays a crucial role in the execution of Promises by managing asynchronous operations in a non-blocking, single-threaded environment.

Here's how the event loop relates to Promise execution:

1.When a Promise settles (is fulfilled or rejected), the .then(), .catch(), or .finally() handlers attached to it are not executed immediately. Instead, they are scheduled to run asynchronously in the microtask queue, which is processed by the event loop after the current synchronous code finishes execution.

2.The event loop continuously checks the call stack and the task queues. After synchronous code completes and the call stack is empty, the event loop processes all microtasks (which include Promise reaction handlers) before moving on to the next macrotask (like setTimeout callbacks).

3.This ensures that Promise handlers run as soon as possible after the Promise settles, but always asynchronously, allowing the JavaScript runtime to maintain smooth, non-blocking execution.

4.The microtask queue has higher priority than the macrotask queue, so Promise reactions run before timers and other callbacks even if those are ready.

Summary:
1.The event loop coordinates when Promise handlers run, placing them in the microtask queue to execute right after the current synchronous code completes.
2.This mechanism enables Promises to provide a clean asynchronous control flow without blocking the main thread.
3.It guarantees that Promise handlers run in an ordered, predictable manner, following the rules of the event loop cycle.


Here's a simplified flow:

1.Synchronous code runs.
2.Promise settles, .then() handlers are placed in the microtask queue.
3.Once synchronous code finishes, event loop processes all microtasks (Promise handlers).
4.After microtasks, event loop picks a macrotask from task queue (e.g., setTimeout callback).
5.Repeat.

Q.Explain the concept of microtask queue in JavaScript Promises.
The microtask queue in JavaScript is an internal queue where Promise reaction handlers (.then(), .catch(), .finally()) are scheduled to execute after the current synchronous code finishes running and before any other tasks, such as those from setTimeout or other event callbacks in the macrotask queue.


example:
console.log('Script start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise then callback');
  });

console.log('Script end');

Q.What is the difference between callbacks and Promises?
The main difference between callbacks and Promises in JavaScript lies in how they handle asynchronous operations and manage error handling, readability, and control flow:

1.Callbacks are functions passed as arguments to other functions and executed after an asynchronous operation completes. However, callbacks often lead to deeply nested, hard-to-read code known as callback hell, and require manual error handling for each step.

2.Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner, more organized way to handle async code through chaining with .then() (for success) and .catch() (for errors), improving readability and centralized error management. Promises also avoid callback hell by flattening the asynchronous flow.

summary:
Promises provide a more manageable, readable, and reliable approach to asynchronous programming in JavaScript, particularly for complex flows, while callbacks are simpler but can lead to complicated nested structures and harder error handling.

Q.How is async/await related to Promises?
Async/await is syntactic sugar built on top of Promises in JavaScript, providing a more readable and synchronous-looking way to write asynchronous code.

1.When you declare a function with the async keyword, that function always returns a Promise. You can think of an async function as implicitly wrapping its return value in a Promise that resolves with that value.

2.Within an async function, you use the await keyword before a Promise to pause the execution of that function until the Promise settles. If the Promise resolves, await returns its resolved value. If the Promise rejects, await throws the rejection error, which you can catch using regular try...catch blocks.

3.This allows you to write asynchronous code that looks synchronous, which improves readability and maintainability.

example:A race condition in programming, including when working with Promises, occurs when two or more asynchronous operations attempt to access or modify shared resources concurrently, and the final outcome depends on the unpredictable order or timing of these operations. In other words, the result varies because of the "race" between asynchronous tasks finishing in an unexpected sequence.


Q.What is a race condition, and how can it be prevented when working with Promises?
Ans.A race condition in programming, including when working with Promises, occurs when two or more asynchronous operations attempt to access or modify shared resources concurrently, and the final outcome depends on the unpA race condition in programming, including when working with Promises, occurs when two or more asynchronous operations attempt to access or modify shared resources concurrently, and the final outcome depends on the unpredictable order or timing of these operations. In other words, the result varies because of the "race" between asynchronous tasks finishing in an unexpected sequence.redictable order or timing of these operations. In other words, the result varies because of the "race" between asynchronous tasks finishing in an unexpected sequence.


Q.How can you convert a callback-based function into a Promise-based one?


