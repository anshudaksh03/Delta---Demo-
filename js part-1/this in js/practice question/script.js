//Q!: write an arrow function that returns the  squre of a number n;
// const squre = (n) =>{
//     return n*n;
// }
// console.log(squre(11))

//Q2: write a function thats print " hellow worls " 5 times at interval of 2s each

let id = setInterval(() => {
    console.log("Hellow world")
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran")
}, 10000)