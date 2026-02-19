// console.log("Hii there")
// setTimeout(()=>{
//     console.log("Here is Anshu kumar")
// }, 4000)
// console.log("Welcome bro")


// ****************set interval functionn is mai hum jitna time danga uss ka bad bar bar run krta rahe ga**********************


// setInterval(()=>{
//     console.log("Here is Anshu kumar")
// }, 2000)

// ***** how to stop our interval function *************

 let id = setInterval(()=>{
    console.log("Here is Anshu kumar")
 }, 2000)

 let id2 = setInterval(()=>{
    console.log("Here is Preeti")
 }, 3000)

 clearInterval(id2) //jiss function ko clear kr danga wo hi stop ho jayegi
