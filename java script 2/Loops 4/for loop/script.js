// for (let i=1; i<=5; i++){
//     console.log( i)
// }

// ********* back ward***********

// for (let i=10; i>=1; i--){
//     console.log( i)
// }

// ********* -3 **************

// for (let i=20; i>=1; i = i-3){
//     console.log( i)
// }


// ***** odd number *******************

// for (let i=1; i<=15; i = i+2){
//     console.log( i)
// }


// ********* back ward***********

// for (let i=15; i>=1; i = i-2){
//     console.log( i)
// }


// ***** even number *******************

// for (let i=2; i<=10; i = i+2){
//     console.log( i)
// }

// ********* back ward***********

// for (let i=10; i>=2; i = i-2){
//     console.log( i)
// }


// ********************** infinite loop *************************

// for (let i=1; i>=0; i++){
//     console.log(i)
// }

// for (let i=1; i<=5; i--){
//     console.log(i)
// }

// for (let i=1; ; i++){
//     console.log(i)
// }  // thease all infinite loop in js



// -*------------ table of 5 ****************

// for(let i=5; i<=50; i=i+5){
//     console.log(i)
// }

// **************** print table withthe prompt **********

// let n = prompt("write your number")
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i)
// }


//  ********************** nested loop **********************

for(let i=1;i<=3; i++){
    console.log(`outer loop ${i}`)
    for(let j=1; j<=3; j++){
        console.log(j)
    }
}