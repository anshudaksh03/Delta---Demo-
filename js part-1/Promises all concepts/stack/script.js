// function hello(){
//     console.log("Inside hellow function")
//     console.log("Hellow")
// }
// function demo(){
//     console.log("Calling Hellow Function")
//     hello();
    
// }
// console.log("Callig Demo function")
// demo();
// console.log("Done bye")

// ***********************Visulaizing Call stack******************************************

function one(){
    return 1;
}
function two(){
    return one() + one()
}

function three(){
    let ans = two() + one()
    console.log(ans)
}
three();