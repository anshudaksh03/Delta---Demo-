// function poem(){
//     console.log("twinkle twinkle little star")
//     console.log("how r what you are")
// }
// poem()



// ******** practice no 2********************

// function rolldice(){
//     let rand = Math.floor(Math.random() * 6) + 1
//     console.log(rand)
// }
// rolldice()

// ***** practice no 3  create the function that give us the average of 3 numbers

// function clcavg(a,b,c) {
//    let avg = (a+b+c)/3;
//     console.log(avg)
// }
// clcavg( 2, 4, 6)


// *** create the  function who print the multiple table of aa number ********

// function printtable(n){
//     for(let i = n; i<=n*10; i+=n){
//         console.log(i)
//     }
// }
// printtable(3)


// ******************* Return function in js  practice 1**********************************

// function getSum(n) {
//     let sum = 0;

//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }


// ******create the function that return the concationation off all string an array ***

// let str = ['hii', "hello" , "bye", "!"]
// function concat(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str))


// ************************** scope************************

let greet = "hello"; // global scope

function changeGreet() {
    let greet = "namasta"; // function scope
    console.log(greet)
    function innerGreet(){
        console.log(greet) // lexical scope
    }
}
console.log(greet)
changeGreet();



