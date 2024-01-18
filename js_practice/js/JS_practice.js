//find missing odd no. 
const input = [5, 7, 9, 11, 15, 17]; 
// output = 13; 

let start = input[0];
const rangeArray = input.slice(1); 

function findMissing(current) {
    if(current != start+2) {
        console.log(start+2);
    }
    start = current; 
}

rangeArray.map(findMissing);



