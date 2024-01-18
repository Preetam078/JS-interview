let name = {
    firtname: "preetam",
    lastname: "mondal",
}

let printName = function(hometown, state) {
    console.log(this.firtname+" "+this.lastname + " from " + hometown+" "+state)
}

//bind  
let bindPrintName = printName.bind(name, "Node"); 
bindPrintName("java")

//polyfill => bind
Function.prototype.myBind = function(...args) {
    let obj = this
    let params = args.slice(1);
    return function(...args2) {

        obj.apply(args[0], [...params, ...args2])
    }
}

let bindPrintName2 = printName.myBind(name, "JS"); 
console.log("before polyfill")
bindPrintName2("java2")