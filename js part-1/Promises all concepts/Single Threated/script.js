// setTimeout(()=>{
//     console.log("Apna College") // Asynsronys
// }, 2000)
// setTimeout(()=>{
//     console.log("Hii ANshu")
// }, 2000)
// console.log("Hellow")

// *************************Call back hell***********************
// h1 = document.querySelector("h1")

// setTimeout(()=>{
// h1.style.color = "red"
// },1000)

// setTimeout(()=>{
// h1.style.color = "orange"
// },2000)
// setTimeout(()=>{
// h1.style.color = "green"
// },3000)

//************************************************************** */

// h1 = document.querySelector("h1")

// function changeColor(color,delay){
//     setTimeout(()=>{
//        h1.style.color = color; 
//     }, delay)
// }

// changeColor("red", 1000)
// changeColor("orange", 2000)
// changeColor("green", 3000)
//*****************************Call back use nesting call back hell*************** */
h1 = document.querySelector("h1")

function changeColor(color,delay,nextColorChnage){
    setTimeout(()=>{
       h1.style.color = color;
       if(nextColorChnage) nextColorChnage() ;
    }, delay)
}

changeColor("red", 1000,()=>{
changeColor("orange", 1000, ()=>{
changeColor("green", 1000, ()=>{
changeColor("pink", 1000)
})
})
})


