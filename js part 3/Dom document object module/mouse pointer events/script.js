// let btn = document.querySelector("button")
// console.dir(btn)
// btn.onclick = function (){
//     console.log("Buttone was clicked")
// }

// *******************************************************
// let btn = document.querySelector("button")
// console.dir(btn)
// function sayhello(){
//     alert("hello")
// }
// btn.onclick = (sayhello)

// ********************************************
let btns = document.querySelectorAll("button") // ab koi bhe button pa click kro ga hii an
for(btn of btns){
    btn.onclick = sayhello
    btn.onmouseenter = function (){
        console.log("Enter the on mouse property on my buttone")// jab jab buttone pa cursore jaye ga jab jab click ho jaye ga 
    }
}
function sayhello(){
    alert("hii i am anshu")
}