// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// ************** fav movie *********************

// let favmovie = "avatar"
// let guess = prompt("Guess my fav movie")
// while((guess != favmovie) && (guess != "quit")){
//     guess = prompt("Wronge guess please try again")
// }
// if(guess == favmovie){
//     console.log("Congrates you guess the right movie")
// } else {
//     console.log("quite")
// }  

// **********************************************

// let i = 1;
// while(i<=5){
//     if(i==3){
//        break;
//     }
//    console.log(i) 
//    i++   
// }
// console.log("We use break for 3 ")


// ************** fav movie *********************

let favmovie = "avatar"
let guess = prompt("Guess my fav movie")
while(guess != favmovie){
    if (guess == "quite"){
        console.log("you quit the game ");
        break;
    }
    guess = prompt("Wronge guess please try again")
}
if(guess == favmovie){
    console.log("Congrates you guess the right movie")
}   

