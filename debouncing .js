/*debounce(func, delay) returns a new function that:
Cancels any pending execution (clearTimeout(timer))
Sets a new timer (setTimeout) to execute the function after delay ms
If called multiple times within the delay, only the last call executes.
*/
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); 
        timer = setTimeout(() => func(...args), delay);
    };
}

function sayHello() {
    console.log("Hello, Neelam!");
}

const debouncedHello = debounce(sayHello, 1000);

debouncedHello(); // If called multiple times within 1 second, only the last call executes.






//throtling 




//