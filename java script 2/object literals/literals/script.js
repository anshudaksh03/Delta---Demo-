// *************  object literals keys are defibe in string *************


// let students = {
//     name: "shradha",
//     age: 23,
//     marks:94.4
// };

// console.log(students)


// const item = {
//     price: 100.9,
//     discount: 50,
//     color: ["red", "pink" ]

// }

//  ************** gett values ************
// let students = {
//     name: "shradha",
//     age: 23,
//     marks:94.4
// };
// console.log(students.age)
// console.log(students['marks'])


//  ********** add update value in object literals***************

// const studens = {
//     name: 'shradha',
//     age:23,
//     marks:94.4,
//     city: "delhi"
// }
// console.log(studens)
// console.log(studens.city = "mumbai")
// console.log(studens.gender = "female") // add a variable
// console.log(studens.marks = "A") //  change in string
// console.log(delete studens.marks) // delete



//  *********** object of objects nested objects ****************

// const classInfo = {
//     aman:{
//         grade:"A+",
//         city: "delhi"
//     },
//     karan:{
//         grade:"o",
//         city: "mumbai"
//     },
//     shradha:{
//         grade:"A",
//         city: "pune"
//     },

// }

// console.log(classInfo)
// console.log(classInfo.shradha)
// console.log(classInfo.city)



// ********** array of object *****************

// const classInfo = [
//     {
//         name:"Aman",
//         city: "mumbai",
//         grade:"A+"
//     },
//     {
//          name:"shradha",
//         city: "puna",
//         grade:"A"
//     },
//     {
//          name:"karan",
//         city: "gurgram",
//         grade:"o"
//     }
// ]
// console.log(classInfo)
// console.log(classInfo[1].name)
// console.log(classInfo[1].city = "Nainital")


// ******************* math object ********************

// Math Object Simple Examples

// console.log(Math.round(4.6));   // 5   → round off to nearest
// console.log(Math.floor(4.9));   // 4   → round down
// console.log(Math.ceil(4.1));    // 5   → round up
// console.log(Math.trunc(4.8));   // 4   → remove decimal

// console.log(Math.pow(2, 3));    // 8   → 2³ = 8
// console.log(Math.sqrt(25));     // 5   → square root of 25

// console.log(Math.abs(-9));      // 9   → always positive

// console.log(Math.max(4, 7, 2)); // 7   → biggest number
// console.log(Math.min(4, 7, 2)); // 2   → smallest number

// console.log(Math.random());     // random number (0 to 1)

// //  random number between 1 to 10
// console.log(Math.floor(Math.random() * 10) + 1);

// //  random number between 50 to 100
// console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

// console.log(Math.PI);           // 3.141592653589793
// console.log(Math.E);            // 2.718281828459045


// ************************** genrate integer by math .random ************************

// ********** genrate 1 to 9************

// let num = Math.random();
// num = num*10;
// num = Math.floor(num)
// console.log(num)

// ********************** gernate 1 to betbeen 100 numbers******************


// let num = Math.floor(Math.random()*100) + 1;
// console.log(num)


// ************* genrate number betbeen 21 to 25***********

// let num = Math.floor(Math.random()*5) + 20; // genrate betbeen 20 to betbeen 25 numbers 
// console.log(num) 


// ************ guessing game *************

// const max = prompt("Enter the max number")
// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number")

// while(true){
//     if (guess == "quite"){
//         console.log("User quit the game ")
//         break;
//     }

//     if(guess == random){
//         console.log("You guess the number right congrates you guess the wright number", random)
//         break;
//     } else if(guess < random){
//        guess = prompt("hint : you guess was too small number please try again")
//     } else {
//         guess = prompt(" hint: your number was to large pleadse try again")
//     }
    

// }


// ***************** Practice questions ************************************


// JS (Part 5) Practice Questions & Solutions

// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// Qs2. Create an object representing a car that stores the following properties for the car:
// name, model, color. Print the car’s name.
const car = {
    name: "MarutiSuzuki",
    model: "MarutiSuzukiDzire",
    color: "white",
};
console.log(car.name);

// Qs3. Create an object Person with their name, age, and city.
// Edit their city’s original value to change it to “NewYork”.
// Add a new property country and set it to “UnitedStates”.
const Person = {
    name: "JaneDoe",
    age: 21,
    city: "NewJersey",
};
Person.city = "NewYork";
Person.country = "UnitedStates";
console.log(Person);



