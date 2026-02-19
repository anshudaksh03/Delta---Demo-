// let friuts = ["mango", "apple", "banana", "grapes" , "litchi" , "orange"]
// for(let i=0; i<= friuts.length; i++){
//     console.log(i,friuts[i])
// }



// ************ backward *************************

// let friuts = ["mango", "apple", "banana", "grapes" , "litchi" , "orange"]
// for(let i=friuts.length-1; i>= 0; i--){
//     console.log(i,friuts[i])
// }



// ******************************


// let friuts = "mango"
// for(let i=0; i<=100; i++){
//     console.log (friuts, i)
// }

// ************ nested loop with arrays********************

// let heroes = [["ironman" , "spiderman" ,  "thor"] , ["superman" , "wonderwomen" , "flash"]];

// for(let i = 0; i<heroes.length; i++){
//     console.log(i, heroes [i],heroes[i].length)
//     for(let j = 0; j<heroes[i].length; j++){
//         console.log( j,heroes[i][j])
//     }
// }

// *******************************************

let students = [["aman" , 95] , ["shradha", 94.50] , ["karan" , 80]]
for(let i =0; i<=students.length; i++){
    // console.log(`info of student ${i}`)
    for(let j=0; j<students[i].length; j++)
    console.log(students[i][j])
} 