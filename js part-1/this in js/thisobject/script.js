// const student = {
//     name:"anshu",
//     age: 21,
//     enf: 95,
//     math: 78,
//     phy: 56,
//     getAvg(){
//         let avg = (this.math + this.enf + this.phy) / 3
//         console.log(avg)
//     }

// }
//     console.log(student.getAvg())


    //****this keyword is refer to an object that is executing the current oiece of code */
const student = {
    name:"anshu",
    age: 21,
    enf: 95,
    math: 78,
    phy: 56,
    getAvg(){
        console.log(this)
        let avg = (this.math + this.enf + this.phy) / 3
        console.log(`${this.name} got avg marks = ${avg}`)
    }

}
    console.log(student.getAvg())
   function getavg(){
    console.log(this)
   }

