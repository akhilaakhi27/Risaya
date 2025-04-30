// A callback function is a function that is passed as an argument to another function.
// It allows you to run a function *after* another function has finished its task,
// or to customize the behavior of the function receiving it.

// example:

function greet(name, callback) {
    console.log("Hi, " + name + "!");
    callback(); // calling the callback function
}

// This is the callback function


function sayHello() {
    console.log("Hello!");
}

// Passing 'sayGoodbye' as a callback to 'greet'
greet("Akhila", sayHello);
