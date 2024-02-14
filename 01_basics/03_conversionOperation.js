let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* #NOTES
// "33" => 33
// "33abc" => NaN(Not A Number)
// true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


/* #NOTES
// 1 => ture; 0 => false
// "" => false
// "azlaan" => ture
*/


let someNumber = 33

let stringNumber = String(stringNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//  ********************* Operations **********************

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2%2);
console.log(2/2);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32


console.log(3 + 4 *5 % 3);


let gameCounter = 100
++gameCounter
console.log(gameCounter);