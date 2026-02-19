 //**************************methods ***************** */

// let cars = ["Audi" , "BMW" , "Maruti", "XUV"]
// console.log(cars) 
// cars.push("toyota") // add krna ka lia add to end 
// console.log(cars) 
// cars.pop("farrai") // delete from end and return it
// console.log(cars)
// cars.unshift("toyota") // add in starting ("(5) ['toyota', 'Audi', 'BMW', 'Maruti','XUV'])"
// console.log(cars)
// cars.shift()
// console.log(cars)  // yea ab delete kr dag ((4) ['Audi', 'BMW', 'Maruti', 'XUV'])




// **************************************Practice question*********************************

// let months = ["January" , "july" , "march" , "August" ]
// console.log(months)
// console.log(months.shift())
// console.log(months.shift())
// console.log(months.unshift("June"))
// console.log(months)
// console.log(months.unshift("July"))
// console.log(months)

// ***********************************Index method - return index of something ************

// let primary = ["red" , "yellow" , "blue"]
// console.log(primary.indexOf("yellow")) //  found return 1
// console.log(primary.indexOf("green")) // not found that reason why return return return -1
// console.log(primary.indexOf("Yellow")) //because yellow first latter is capital thats -1

// ******includes : search for value ********

// console.log(primary.includes("red")) // true kyu ki yea  hai
// console.log(primary.includes("green")) // kyu ki yea n hai  false

// ********************Concat methods ************************

// let primary =  ["red" , "yellow" , "blue"]
// let secondarty =  ["orange" , "green" , "voilet"]
// // console.log(primary.concat(secondarty))
// // let allColors = primary.concat(secondarty) // iss mai pahela liya to primary ka pahela ayenga colors
// // console.log(allColors)

// console.log(primary.concat(secondarty))
// let allColors = secondarty.concat(primary) // ['orange', 'green', 'voilet', 'red', 'yellow', 'blue'] iss mai  bad mai aye
// console.log(allColors)

// *************reverse in array ***********/*//

// let primary =  ["red" , "yellow" , "blue"]
// console.log(primary.reverse()) // in the form is reserve (3) ['blue', 'yellow', 'red']



//******************Slice methods copies the portion of the array********************* */

// let colors = ["red" , "yellow" , "blue" , "orange" , "pink" ,"white"]
// console.log(colors.slice()) // (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']
// console.log(colors.slice(1)) //(5) ['yellow', 'blue', 'orange', 'pink', 'white']
// console.log(colors.slice(2)) // (4) ['blue', 'orange', 'pink', 'white']
// console.log(colors.slice(2,3))// ['blue']
// console.log(colors.slice(2,4)) // (2) ['blue', 'orange']
// console.log(colors.slice(-2)) // (2) ['pink', 'white'] iiss ka matlab hai ki huma humara array ka last ka -2  2 chaiya like pink and white
// console.log(colors.slice(-5))  // (5) ['yellow', 'blue', 'orange', 'pink', 'white']



// ****Splice method "remove , replace , add element in place" splice(start,deleteCount,item0 .....itemN) ***********

// let colors = ["red" , "yellow" , "blue" , "orange" , "pink" ,"white"]
// console.log(colors.splice(4)) // (2) ['pink', 'white'] aur 4 dellete ho jayenga
// console.log(colors) // (4) ['red', 'yellow', 'blue', 'orange']

// console.log(colors.splice(0 , 1)) // ['red']
// console.log(colors)// (3) ['yellow', 'blue', 'orange']
// console.log(colors.splice(0 , 1 , "black", "gray"))  // ['yellow']
// console.log(colors) // (4) ['black', 'gray', 'blue', 'orange']
// console.log(colors.splice(1 , 0 , "blue sky")) 
// console.log(colors) // (5) ['black', 'blue sky', 'gray', 'blue', 'orange']
// console.log(colors.splice(1 , 1 , "baby pink")) 
// console.log(colors) // (5) ['black', 'baby pink', 'gray', 'blue', 'orange']


// *******sort an array (means arrange the value acending and desending accordin to aplhabate "a,b,c,d,e,") ********

// let days = ["monday" , "sunday" , "wednesday" , "tuesday"]
// console.log(days.sort()) // (4) ['monday', 'sunday', 'tuesday', 'wednesday']

// let letter = ["c" , "a" , "b" , "e" , "d"]
// console.log(letter.sort()) // (5) ['a', 'b', 'c', 'd', 'e']

// *******************practice 1 ***************************

// let months = ["January" , "july" , "march" , "August" ]
// console.log(months.splice(0 , 2 , "july" , "june")) // (2) ['January', 'july']
// console.log(months) // (4) ['july', 'june', 'march', 'August']

// *******************practice 2 ***************************
let programming = ["c", "c++" , "html" , "javascript" , "python" , "java", "c#" , "sql"]
console.log(programming.reverse().indexOf("javascript")) // index is = 4 reversed is ((8) ['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c']




// *************  [ array constant ka matlab hota hai agar humna koi variable abnaaya to variable const banta hai na ki variabbe ka andar jo store hai wo andar hum change kr sakta lakin kise aur array ka resfrence n da sakta only andar change kr sakta jo store like 5 store hai to uss ko 6 kr sakta  par variable ka name agar const number = [1 , 3 , 4] toiss ka anadar 4 , 3 ko change kr sakta na ki const number ko contant number banta hai ]
// 



// *********************** Nested arrays **********************************

// let nums = [[2,4] , [3,6] , [4,8]];
// console.log(nums)
// console.log(nums[0])
// console.log(nums[0] [0])
// console.log(nums[1] [1])
// console.log(nums[1] [2])

// *****************practices**************

let game = [['x',null , '0'] , [null , 'x' , null] , ["0" , null ,'x']]
console.log(game)
console.log(game[0])
console.log(game[0] [1])
console.log(game[0] [1] = 'o')
console.log(game)



//  ************************** Assignments *************

// Qs1. Write a JavaScript program to get the first n elements of an array.
// [n can be any positive number]. For example: for array [7,9,0,-2] and n=3 Print [7,9,0]

let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans); // Output: [7, 9, 0]



// Qs2. Write a JavaScript program to get the last n elements of an array.
// [n can be any positive number]. For example: for array [7,9,0,-2] and n=3 Print [9,0,-2]

let arr2 = [7, 9, 0, -2];
let n2 = 3;
let ans2 = arr2.slice(arr2.length - n2);
console.log(ans2); // Output: [9, 0, -2]



// Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Please enter a string");
if (str.length == 0) {
  console.log("String is empty");
} else {
  console.log("String is not empty");
}



// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lowercase.

let str2 = "ApNaCoLlEgE";
let idx = 3;

if (str2[idx] == str2[idx].toLowerCase()) {
  console.log("Character is lowercase");
} else {
  console.log("Character is not lowercase");
}



// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let str3 = prompt("Please enter a string");
console.log(`Original string = ${str3}`);
console.log(`String without spaces = ${str3.trim()}`);



// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr3 = ["hello", "a", 23, 64, 99, -6];
let item = 64;

if (arr3.indexOf(item) != -1) {
  console.log("Element exists in array");
} else {
  console.log("Element doesn't exist in array");
}




