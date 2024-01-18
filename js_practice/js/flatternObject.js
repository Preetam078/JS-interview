// let multiply = function(x, y) {
//     console.log(x*y);
// }

// //function curring using "bind" method made more methods using the a single method......[#imp]

// let multiplybyTwo = multiply.bind(this,2);  // second argument is permanent.
// multiplybyTwo(5);

// let multiplybyThree = multiply.bind(this, 3);
// multiplybyThree(4)

function flattenObject(obj) {
    let result = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          // Recursively flatten nested object
          const flattenedNestedObject = flattenObject(obj[key]);
  
          // Merge the current key with the flattened nested object
          for (const nestedKey in flattenedNestedObject) {
            if (flattenedNestedObject.hasOwnProperty(nestedKey)) {
              result[`${key}.${nestedKey}`] = flattenedNestedObject[nestedKey];
            }
          }
        } else {
          // Base case: add non-object property to the result
          result[key] = obj[key];
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nestedObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 4
        }
      }
    },
    h: 5
  };
  
  const flattenedObject = flattenObject(nestedObject);
  console.log(flattenedObject);