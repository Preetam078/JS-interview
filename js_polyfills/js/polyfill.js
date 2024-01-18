// //! polyfill for arrow function (not supported in Opera Mini) 

// //? before
// var ans = [1,23,4,5,56].map((curr)=> {  //TODO use Arrow => function 
//     return curr += 2
// })
// console.log(ans);

// //?  after
// var ans = [1,23,4,5,56].map(function(n) {  //TODO used normal function
//     return n+2
// })
// console.log(ans);


// //! polyfill for ArrayFlat

// //?before 
// var arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];
// let newArr = arr.flat();  // TODO by Default it only flat one level 
// console.log(newArr);
// newArr = arr.flat(Infinity) //TODO added "Infinity" for the more "nested level"
// console.log(newArr);


// //? after 
// var arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];
// Array.prototype.myFlat = function(depth = 1, output = []) {
//     // base condition
//     if (depth <= 0) {
//         output.push(this); //TODO use 'this' to refer to the current array
//         return output;
//     }

//     for (let curr of this) { //TODO use 'of' to iterate over values
//         if (Array.isArray(curr)) {
//             curr.myFlat(depth - 1, output); // pass the array element, not the index
//         } else {
//             output.push(curr);
//         }
//     }

//     return output;
// };
// let ans = arr.myFlat(10);
// console.log(ans);


// //!  polyfill for the array.filer method

// //?before 
// var arr = [2,3,5,6,7,8]; 
// var newArr = arr.filter((curr)=> {
//     return curr % 2 == 0
// })
// console.log(newArr)

// //? after
// Array.prototype.myFilter = function(func, output = []) { 
//     var currArray = this;
//     for(const ele of currArray) {
//         if(func(ele) == true) {
//             output.push(ele); 
//         }
//     }
//     return output;
// }

// function isEven(ele) {
//     return ele % 2 === 0; 
// }

// var arr = [2,3,5,6,7,8]; 
// var newArr = arr.myFilter(isEven);
// console.log(newArr)


// //! polyfill for the array.reducer method 

// //? after 
// var arr = [1,3,4,5,6,7]; 
// var ans = arr.reduce((acc, curr)=> {
//     return acc += curr
// }, 0);
// console.log(ans)

// //?after
// Array.prototype.myReducer = function(helper, init = 0) {
//     let state = init; 
//     for(let curr of this) {
//         state = helper(state, curr);
//     }
//     return state;
// }

// // for addition 
// function addition(acc, curr) {
//     return acc + curr; 
// }

// // for custom
// function custom(acc, curr) {
//     if(acc[curr.age]) {
//         acc[curr.age]++;
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }

// const user = [
//     {firstname: "preetam", lastname: "mondal", age: 20},
//     {firstname: "riya", lastname: "mondal", age: 2},
//     {firstname: "uttam", lastname: "mondal", age: 76},
//     {firstname: "gita", lastname: "mondal", age: 21},
// ]

// var arr = [1,3,4,5,6,7]; 
// var ans = arr.myReducer(addition, 0);
// var ans2 = user.myReducer(custom, new Object());
// console.log(ans2);
// console.log(ans)


// //! polyfill for the Array.map method

// //?after 
// var arr = [1,3,4,5,6,7,8,9];
// var ans = arr.map((curr)=> {
//     return curr;
// })
// console.log(ans)

// //?after 
// Array.prototype.myMap = function(helper, output = new Array()){
//     this.forEach((item) => {
//         output.push(helper(item));
//     })
//     return  output;
// }

// function double(curr) {
//     return curr*2;
// }

// var arr = [1,3,4,5,6,7,8,9];
// var ans = arr.myMap(double);
// console.log(ans)


// //! polyfill for the promise-all

// //?after
// Array.prototype.customAll = function () {
//     let promiseResolved = 0;
//     let output = [];

//     return new Promise((resolve, reject) => {
//         this.forEach((promise) => {
//             promise
//                 .then((response) => {
//                     promiseResolved++;
//                     output.push(response);
//                     if (promiseResolved === this.length) {
//                         resolve(output);
//                     }
//                 })
//                 .catch((error) => {
//                     // If any promise rejects, immediately reject the customAll promise
//                     reject(error);
//                 });
//         });
//     });
// };

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise1 done");
//     }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setInterval(() => {
//         resolve("promise2 done");
//     }, 3000);
// });

// const arr = [promise1, promise2];

// arr.customAll()
//     .then((ans) => {
//         console.log(ans);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });
