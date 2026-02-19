// scpe determine the accessibility of variable, objecct, and function from differenet parts of code  (function , block, lexical)

// function scope : variable defined inside a function are not accessible (visible) from outside the function

// let sum = 54; // globle scope iss ki kum
// function calSum(a,b){
//     let sum = a+b; //function scope // iss ki jhayada priority hoti hai hai 
//     console.log(sum)

// }
// calSum(1,2)
// console.log(sum)


//block scope {}:  variable declared inside a{} block cannot be accessed from outside the block

// {
//      let a = 25;
// }
// console.log(a)

//************************ */

// for(let i=1; i<=5; i++){
//     console.log(i)
// }
// console.log(i)// kyu ki yea block scope hai jo curlibresses ka andar hai uss ko print kra ga abhara bala ko nahi

// **************

// let age = 18;
// if(age>= 18){
//     let str = "adult"
//     console.log(str)
// }
// console.log(str)


// **** lexical scope "use nested function": a variable define outside the function can be accessible inside the another function define after the variable declaration
//is positive is notTrue

function outerFun(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        let a = 10;
        console.log(x) // yanha a accessable hai
        console.log(y)
    }
    console.log(a)
    innerFunc();
}