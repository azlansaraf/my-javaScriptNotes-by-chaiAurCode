// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array methods                     

myArr.push(6) // to add new arrays in array
myArr.push(7)
myArr.pop() // to remove last value in array
myArr.unshift(9) //this will add value at start of the array
myArr.shift() //this will remove value at start of the array

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));


const newArr = myArr.join() //adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(newArr);

slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log(myn2);
