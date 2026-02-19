const student = {
    name: "Anshu",
    marks:95,
    prop: this, // global scope
    getname: function(){
        console.log(this)
        return this.name;
    },
    getmarks: () => {
        console.log(this) // parent scope window
        return this.marks;  

    },
    getInfo1: function (){
        setTimeout(() => {
            console.log(this) // student object print hoga 
        },2000)
    },
    getInfo2: function(){
        setTimeout(function () {
            console.log(this); // window  print hoga
        }, 2000)
    }

}