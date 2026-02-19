// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers 
// and returns the average of those numbers.

const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr)); // Output: 3.5



// Qs2. Write an arrow function named isEven() that takes a single number as argument 
// and returns if it is even or not.

let num = 4;
const isEven = (num) => num % 2 == 0;
console.log(isEven(num)); // Output: true



// Qs3. What is the output of the following code:
const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

// Ans3:
// After a delay of 1 second, "undefined" is logged to the console.
//
// Explanation:
// While the setTimeout() function uses object.logMessage as a callback,
// it invokes object.logMessage as a regular function rather than as a method.
// During a regular function call, 'this' equals the global object
// (which is 'window' in browsers).
// Therefore, console.log(this.message) refers to window.message,
// which is undefined.



// Qs4. What is the output of the following code:
const object2 = {
    message: 'Hello, World!',
    getMessage() {
        const message = 'Hello, Earth!';
        return this.message;
    }
};

console.log(object2.getMessage());

// Ans4:
// "Hello, World!" is logged to the console.
//
// Explanation:
// object2.getMessage() is a method invocation,
// so 'this' inside the method refers to object2.
// The variable 'message' declared inside the method
// does not affect 'this.message', hence it prints "Hello, World!".
