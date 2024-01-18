//debouncing in JS
let inputField = document.querySelector(".input_field");

let counter = 0;
function getData(value) {
  console.log("fetching data....", counter++, "Value:", value);
}

const  debounce = (func, delay) => {
  let timer;
  return function (...args) {

    //clearing the setTimeout
    clearTimeout(timer);
    timer = setTimeout(()=> {
      func.apply(this, args);
    }, delay);
  }
}
let callDebouncing = debounce(getData,500);

inputField.addEventListener("keyup", function(e) {
  callDebouncing(e.target.value);
})
