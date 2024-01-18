
//call, appl, bind

printName = function(hometown, state) {
    console.log(this.firtname+" "+this.lastname + " from " + hometown + " "+state)
}

// var name = {
//     firtname: "preetam",
//     lastname: "mondal",
//     printName : function(hometown, state) {
//         console.log(this.firtname+" "+this.lastname + " from " + hometown + " "+state)
//     }
// }

let name = {
    firtname: "preetam",
    lastname: "mondal",
}
printName.call(name, "Delhi", "noida"); //second is for hometown parameter

let name2 = {
    firtname:"riya", 
    lastname:"kumar", 
}

//call =>  method we can do function borrowing. 
printName.call(name2, "Kolkata", "odissa") //second is for the hometown parameter


//apply => only diff is we pass rest of the arguments in Arrays*
printName.apply(name2, ["noida", "faridabad"])  /*IMP*/

//bind => bind and keep the copy in seperate function (invoke later)
let printMyName = printName.bind(name2, "kerela", "chennai");
console.log(printMyName);
printMyName()


