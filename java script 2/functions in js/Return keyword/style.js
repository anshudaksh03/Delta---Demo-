function sum (a , b){
    console.log("Hello")
    return(a+b)
    console.log("hello") // function ko return krna ka bad bala code execute nahi hota hai
}

console.log(sum(2,4))

// *****************************************

function isAdult(age){
    if(age >= 18){
        return"adult"
    } else {
        return "not adult"
    }
    console.log("Bye bye")
}