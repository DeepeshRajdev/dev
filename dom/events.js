document.querySelector(".child").addEventListener("mousedown", (eventDetails) => {
    console.log("child clicked");
    console.log(eventDetails);
}, false);
document.querySelector(".parent").addEventListener("mouseup", (eventDetails) => {
    console.log("parent clicked");
    console.log(eventDetails);
}, false);
/*
mouseup --> when a button on a pointing device is released while the pointer is located inside it.
 mousedown --> when a pointing device button is pressed while the pointer is inside the element.
 Note: This differs from the click event in that click is fired after a full click action occurs; 
 that is, the mouse button is pressed and released while the pointer remains inside the same element.
 mousedown is fired the moment the button is initially pressed.
 */
document.body.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".position").forEach((item) => {
        item.textContent = event[item.id];
        //console.log(event);
    });
});
setTimeout(() => {
    console.log(1);
}, 0);
console.log(2);



//Async Javascript


/*

1. Call Stack:

The call stack is a data structure that keeps track of the functions being executed.
When you call a function, it's added to the top of the stack. When a function finishes executing,
it's removed from the stack.

2. Web APIs:

JavaScript is not just the language itself; it also interacts with the environment (e.g., the browser in a web context).
 The environment provides APIs (Application Programming Interfaces) for performing tasks like making HTTP requests,
  setting timeouts, and handling events.

When you make an asynchronous call (e.g., setTimeout, fetch), the browser environment takes over.
It sets a timer or makes a network request and schedules a callback function.

In this example, setTimeout is part of the browser's Web API. It sets a timer for 1000 milliseconds.
After the timer expires, the callback function is placed in the callback queue.

3. Callback Queue:

The callback queue (or task queue) is where callback functions from asynchronous operations are placed.
These callbacks are not executed immediately; they wait for the call stack to be empty.

4. Event Loop:

The event loop is a continuous process that checks both the call stack and the callback queue.
If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.

*/
