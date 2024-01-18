//debouncing in JS
let inputField = document.querySelector(".input_field");

function getData(value) {
    console.log(value);
}

function trottle(func, limit) {
    let flag = true; 
    return function(...args) {
        if (flag == true) {
            func.apply(this, [...args]); 
            flag = false; 
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

var trottling = trottle(getData, 2000);

inputField.addEventListener("keyup", function(e) {
    trottling(e.target.value);
})