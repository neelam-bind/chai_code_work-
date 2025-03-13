//  Function Declaration:
// Hoisted (can be used before the declaration).
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!


// Function expression :
// the function is assigned to an varibale 
// no hoisting 

let greet = function(){
console.log("neelam");
}
greet();


//Arrow fuction:
//used for concise syntax
//Does not have its own this (inherits from the surrounding scope
let greet =() => {
  console.log("neelam");
}
greet();


//callback function:
//A function passed as an argument to another function,which is then invoked by outer function
/*Key Characteristics of a Callback Function
✅ 1. It is passed as an argument to another function
✅ 2. It is executed inside the function that received it
✅ 3. It is often used in asynchronous operations or function chaining*/
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 2000);
}
fetchData(console.log); // Output after 2 seconds: Data loaded



/*
✅ A callback function is a function that is passed as an argument and executed inside another function.
✅ A higher-order function (HOF) is a function that takes a function as an argument or returns a function.
*/


//first order function : First-class functions when functions in that language are treated like any other variable
// first order function : functions can be passed as an argument to other functions

//when fcuntion is treated as a variable 

let add = function (a,b){
    return a+b;
}


//higher order function :either takes one or more functions as arguments or returns a function


// exmaple :
function say_hello(){
    return `hello `;
}
function greet( hello , name ){
    console.log( hello()+ `${name}` );
}

greet(say_hello , "world");


//Returning a function 
function sayHello() {      //Function Definition
  return () => {
    console.log("Hello!");
  };
}
const ans = sayHello();      //Function Invocation
ans();

//IIFE: (Immediately Invoked Function Expression)
//runs as soon as it is defined. 
// It is also known as a self-executing anonymous function
// It is wrapped inside parentheses and invoked instantly.
(function() {
  console.log("This runs immediately!");
})();

//🔹 Used for private variables, API calls, event handling, and preventing global pollution.
const counter = (function () {
  let count = 0; // Private variable

  return {
    increment: () => count++,  
    decrement: () => count--, 
    getValue: () => count  
  };
})();

console.log(counter.increment());  // 0
console.log(counter.decrement());  // 1
console.log(counter.getValue());   // 0

