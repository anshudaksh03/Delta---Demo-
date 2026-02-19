// function saveDb(data){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         console.log("Your dara was saved in Database" ,data) 
//     } else {
//         console.log("Data was not save Week connection")
//     }
// }
// saveDb("Anshu")

// *************Call BAck hell program****************************************************

// function saveDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//     success();
//     } else {
//         failure();
//     }
// }
// saveDb("Anshu",
//     () => {
//     console.log("Success: Your data was saved in Database") 
//     saveDb(
//         "Hello world",
//         ()=>{
//             console.log("Success2:Data 2 Saved")
//             saveDb("Anshu kumar",
//                 ()=>{
//                     console.log("Success3:Data 3 Saved")
//                 },
//                 ()=>{
//                     console.log("Failure3:Week Connection")
//                 }
//             )
//         },
//         ()=>{
//             console.log("Failure2:Week Connection ")
//         }
//     );
//     },
//     () =>{
//      console.log("Failure: Data was not save Week connection")

//     }
// )

// **********************Promises program ******************/********** */

// function saveDb(data){
//    return new Promise((success , failure) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         success("Success: Data Was Saved");
//     } else {
//         failure("Failure: Data Was not Saved Week Connection");
//     }
//    });
// }

// \*********** Use resolve , reject******************

// function saveDb(data){
//    return new Promise((resolve , reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         resolve("Success: Data Was Saved");
//     } else {
//         reject("Failure: Data Was not Saved Week Connection");
//     }
//    });
// }

// *************(.then method and .Catch) method use *****************

// function saveDb(data){
//    return new Promise((resolve , reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         resolve("Success: Data Was Saved");
//     } else {
//         reject("Failure: Data Was not Saved Week Connection");
//     }
//    });
// }
//  saveDb("Anshu prajapati")//request = promise object
// .then(()=>{
//     console.log("Promise Was resolve")
// })
// .catch(()=>{
//     console.log("Promise was reject")
// })
 
//**********Promise Chainning********************** */

// function saveDb(data){
//    return new Promise((resolve , reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         resolve("Success: Data Was Saved");
//     } else {
//         reject("Failure: Data Was not Saved Week Connection");
//     }
//    });
// }
//  saveDb("Anshu prajapati")//request = promise object
// .then(()=>{
//     console.log("Data1 Saved: Promise Was resolve")
//     return saveDb("Hello world")
// })
// .then(()=>{
//     console.log("data 2 saved")
//     return saveDb("Preeti")
// })
// .then(()=>{
//     console.log("Data3 was saved")
// })
// .catch(()=>{
//     console.log("Promise was reject")
// })

//======== Result and errors promise********************

// function saveDb(data){
//    return new Promise((resolve , reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         resolve("Success: Data Was Saved");
//     } else {
//         reject("Failure: Data Was not Saved Week Connection");
//     }
//    });
// }
//  saveDb("Anshu prajapati")//request = promise object
// .then((result)=>{
//     console.log("Data1 Saved: ")
//     console.log("Result of promise" , result)
//     return saveDb("Hello world")
// })
// .then((result)=>{
//     console.log("data 2 saved") 
//     console.log("Result of promise", result)
//     return saveDb("Preeti")
// })
// .then((result)=>{
//     console.log("Data3 was saved")
//     console.log("Result of promise", result) 
// })
// .catch((error)=>{
//     console.log("Promise was reject")
//     console.log("Error Of promise", error)
// })

// ************* Refactoring Old code*********************

h1 = document.querySelector("h1")

function changeColor(color,delay){
  return new Promise((resolve , reject)=>{
 setTimeout(()=>{
       h1.style.color = color;
      resolve("color changed")
    }, delay)
})
   }
   
   changeColor("red", 1000 )
   .then(()=>{
    console.log("Red Color Was completed")
    return changeColor("Orange", 1000)
   })
   .then(()=>{
     console.log("Orange Color Was completed")
    return changeColor("green", 1000)
   })
   .then(()=>{
     console.log("Green Color Was completed")
    return changeColor("blue", 1000)
   })
   .then(()=>{
     console.log("Blue Color Was completed")
   })

 

