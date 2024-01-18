const expensive = () => {
    console.log("expensive");
}

var lessExpensive = trottle(expensive, 500)


//using a concept of the closure....
function trottle(func, limit) {
    let flag = true;
    return function () {
        if(flag == true) {
            func();
            flag = false
            setTimeout(()=> {
                flag = true;
            }, limit)
        }
    }
}


// very expensive....
window.addEventListener("resize",  lessExpensive);