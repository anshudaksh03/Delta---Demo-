// // let n = 5;

// // for (let i = 0; i < n; i++){
// //     console.log("hello" , i)
// // }
// // console.log("Bye")

// let arg = process.argv;
// for(let i = 2; i<arg.length; i++ ){
//     console.log("hello to",arg[i])
// }


// const math = require("./math")
// console.log(math.sum(2 , 2))
// console.log(math.PI)

// ********************************************
// const fruits = require('./fruits'); // simple and works

// console.log(fruits);


// --------------- import module------------------

import { sum,PI } from "./math.js";
import { generate } from "random-words";
// console.log(sum(2,1))
// console.log(PI)
console.log(generate())
