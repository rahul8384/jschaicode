// array

const myArr = [0, 1, 2, 3, 4, 5] //define an array
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //to add the an element in the array
// myArr.push(7)
// myArr.pop() to delete an element from the array from the back 

// myArr.unshift(9) //unshift adds an element at the front in an array
// myArr.shift() //shift deletes an element from the front in an array

// console.log(myArr.includes(9)); to check whether an element exists or not in the array it returns a boolean value
// console.log(myArr.indexOf(3)); this just gives the index of the element in that array

// const newArr = myArr.join() this just transforms an array to a string 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//slice is a method of array which return a subarray from the original array without changing the original array, starting index is inclusive and ending index is not
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
//splice returns subarray from the original array both indexes are inclusive and removes that subarray from the original array 