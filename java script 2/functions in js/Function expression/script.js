// let name = "Anshu"
// let sum = function(a , b){
//     return a+b;

// }
// console.log(sum(1 ,2))



// ************* higer order function*********
//A function that does one or both: take one or multiple function . return a function

// function multipleGreet (func, n){ // higer order function
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }
// let great = function(){
//     console.log("hello world")
// }
// multipleGreet(function() {console.log("namasta")},1000)
// //multipleGreet(great , 2)



//  *********** higher order function return ******************************

// let odd = function(n){
//     console.log(!(n%2==0))
// }
// let even = function(n){
//     console.log((n%2==0))
// }
// odd(4)// even false
// odd(7)// odd true


// function oddevenFactory(request) {
//     if (request == "odd") {
//         let odd = function (n) {
//             console.log(!(n % 2 == 0))
//         }
//         return odd;
//     } else if (request == "even") {
//         let even = function (n) {
//             console.log((n % 2 == 0))

//         }
//         return even;
//     } else {
//         console.log("wronge request")
//     }
// }
// oddevenFactory(2)

// *********************************method*******************************
const calculator = {
    add: function(a ,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}
console.log(calculator.mul(1 , 2))
console.log(calculator.add(1 , 2))

