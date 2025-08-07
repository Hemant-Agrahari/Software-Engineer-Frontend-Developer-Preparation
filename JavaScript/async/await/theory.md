Q.What is async/await?
Async/await is a modern syntax in JavaScript that simplifies working with asynchronous operations by allowing code to be written in a clear, linear, and synchronous-like manner while still being non-blocking. An async function implicitly returns a Promise, and the await keyword pauses the function execution until the Promise resolves or rejects, enabling easier handling of asynchronous flows with straightforward error management using standard try...catch blocks. This construct enhances code readability, maintainability, and helps avoid complex Promise chaining or callback nesting.

This approach offers several advantages:
1.Code Clarity and Readability: Async/await eliminates the complexity of nested .then() chains and callbacks, making asynchronous operations easier to read and reason about.

2.Error Handling with Try/Catch: Unlike Promises that require .catch() blocks, async/await allows the use of traditional try...catch for error handling, centralizing the logic and making debugging simpler.

3.Sequential and Conditional Flow Control: Async/await permits writing asynchronous code with clear sequential or conditional logic, similar to synchronous code, enhancing maintainability.

4.Efficient Handling of Concurrency: While await pauses execution, it only pauses within the async function, allowing other JavaScript code to run, preserving performance. You can also handle multiple Promises concurrently using Promise.all with await to optimize execution time.

5.Interoperability: Async/await works seamlessly with existing Promise-based APIs, so you can easily refactor callback-heavy code or complex Promise chains into cleaner async functions.

Q.What does the async keyword do to a function?
Ans.The async keyword applied to a function in JavaScript transforms that function into an asynchronous function that always returns a Promise, regardless of what the function body returns. If the function returns a non-Promise value, it is automatically wrapped in a resolved Promise.

More specifically:
1.When you declare a function with async, calling that function returns a Promise that will be:
  a.Resolved with the value you explicitly return inside the function, or
  b.Rejected if an unhandled exception is thrown inside the function.

2.The presence of async also enables use of the await keyword inside the function, which pauses execution until the awaited Promise settles.

3.The part of the function executed before the first await runs synchronously, and after that, the function execution resumes asynchronously.

4.This makes asynchronous code easier to write and read as it looks like synchronous code but runs without blocking.


Q.What does the await keyword do inside an async function?
The await keyword inside an async function pauses the execution of that function until the Promise it is waiting for settles—that is, either resolves with a value or rejects with an error.

What await does:
1.Pauses the async function's execution at that line until the Promise settles.
2.If the Promise resolves, await returns the resolved value, which you can assign to a variable.
3.If the Promise rejects, await throws the rejection error, which you can catch using a try...catch block.
4.This pause is only within the async function — other JavaScript code continues to run (it's non-blocking).
5.It makes asynchronous code look and behave like synchronous, linear code, improving readability and maintainability.

Q.How does error handling work with async/await? How is it different from Promise .catch()?
Error handling with async/await works by using standard synchronous control flow constructs, primarily try...catch blocks, to catch errors from asynchronous operations. This enables error handling that feels very natural and similar to how synchronous code handles exceptions.

How Error Handling Works with async/await
1.When you use await on a Promise, if that Promise rejects, the await expression throws the rejection error.
2.To handle this, you wrap the await calls inside a try block.
3.If an error is thrown, the catch block captures it, allowing you to handle the error gracefully.
4.This approach centralizes error handling and keeps code clean and readable.

Q.Can you use await outside of an async function? Why or why not?
You cannot use await outside of an async function in regular JavaScript code because the await keyword is only valid inside the body of an async function. If you try to use await outside an async function, it results in a syntax error.

Why?
1.The await keyword pauses the execution of the surrounding async function until the awaited Promise settles (fulfills or rejects). Since outside an async function there is no asynchronous context to pause, JavaScript disallows await at top-level in regular scripts.

2.The design enforces that asynchronous operations using await happen within a function context that returns a Promise, ensuring predictable async flow and proper error handling.

Q.What is the behavior of an async function when it encounters await for a Promise?
When an async function encounters an await expression for a Promise, its behavior is as follows:

The execution of the async function pauses at the await line until the awaited Promise settles (either fulfills or rejects).

While the function is paused, control is returned to the caller, allowing other code to continue running (the async function doesn't block the main thread).



Q.Explain how async/await improves code readability compared to Promise chaining and callbacks.
Ans.Async/await improves code readability compared to Promise chaining and callbacks by allowing asynchronous code to be written in a simpler, more linear, and synchronous-like style while preserving non-blocking behavior.

Here’s how async/await enhances readability and code clarity:
1.Linear and Sequential Structure: Async/await lets you write asynchronous operations in a top-to-bottom, sequential format—each await pauses execution until a Promise resolves—so the flow resembles standard synchronous code. This avoids the deep nesting and rightward drift common in callback hell and chained .then() methods.

2.Reduced Indentation and Nesting: Instead of callbacks inside callbacks or long chained .then() calls, async/await keeps the code flatter and less indented, making it easier to read and maintain

3.Simplified Error Handling: With async/await, you use familiar try...catch blocks to handle errors, consolidating error management in one place rather than scattering .catch() handlers or error callbacks throughout chains.

4.Easier Debugging and Stack Traces: Because async/await code looks like synchronous code, debuggers provide clearer stack traces and allow stepping through asynchronous code more intuitively, unlike with callbacks or Promises where execution jumps between .then() callbacks.

5.Maintainability and Scalability: Adding or removing asynchronous steps is straightforward in async/await code, often requiring fewer syntax changes than Promise chains.

Q.How can you run multiple asynchronous tasks concurrently using async/await?
Ans:You can run multiple asynchronous tasks concurrently using async/await by leveraging Promise.all(). This method takes an array of promises and returns a single Promise that resolves when all input promises resolve. Using Promise.all in combination with async/await lets you start all tasks simultaneously and then wait for all of them to finish, improving performance compared to awaiting each task sequentially.

How to run async tasks concurrently with async/await:
1.Start all async functions without awaiting immediately—they start running in parallel.
2.Use await Promise.all([...]) to wait for all started Promises to resolve.
3.The result is an array with each Promise's resolved value in order.

Q.What is the difference between sequential and concurrent execution with async/await? Provide examples.

Q.How do you handle multiple Promises with async/await and Promise.all?

Q.What happens if an awaited Promise rejects? How can you catch such errors?

Q.What are the advantages and potential pitfalls of using async/await?

Q.How does async/await impact the JavaScript event loop and microtask queue?

Q.What is the difference between blocking and non-blocking code, and how does async/await relate to this?

Q.How can you simulate delays or timeouts using async/await?

Q.Explain how to write an async function that retries a failing operation using async/await.

Q.What is the behavior of the return value of an async function?

Q.Can async functions be canceled? How would you handle cancellation in async/await?

Q.Compare async/await with other asynchronous patterns like callbacks, Promises, and generators.

Q.What are common mistakes or anti-patterns when using async/await?

Q.How do you debug issues in async functions?

Q.What is the difference between async function foo() {} and function foo() { return Promise.resolve(); }?

Q.Explain the significance of try...catch blocks in async functions.

Q.How can you use async/await in combination with Promise combinators like Promise.race or Promise.any?