const score = 400
// console.log(score);        //result: 400

const balance = new Number(100)
// console.log(balance);      //result: [Number: 100]

// console.log(balance.toString());    //result:100
// console.log(balance.toString().length); //result: 3
// console.log(balance.toFixed(2));    //result: 100.00
// console.log(balance.toFixed(1));    //result: 100.0

const otherNumber = 123.8966
// const otherNumber = 23.8966    if other value set to 3  result: 23.9
// const otherNumber = 123.8966     if other value set to 3   result: 124
// const otherNumber = 123.8966     if other value set to 4 result: 124
// const otherNumber = 1123.8966    if other value set to 3 result: 1.12e+3

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //result: negative to positibe 
// console.log(Math.abs(4))    //result: but not positive to negative

// console.log(Math.round(4.6))  //result: 5
// console.log(Math.ceil(4.2))    //result: top number i.e 5
// console.log(Math.floor(4.9))   //result: lowestNumber i.e 4

// console.log(Math.min(4, 3, 6, 8)) //result: minimum value in this array i.e 3
// console.log(Math.max(4, 3, 6, 8)) //result: maximum value in this array i.e 8

console.log(Math.random()); //result: numbers always comes between 0 and 1 i.e 0.719339098808021 and 0.9157451948391648

console.log((Math.random()*10) + 1 );  //result:  numbers always comes between 0 and 1 i.e 1.1694966799377107 and 9.1694966799377107
console.log((Math.random()*10) + 1 );   //result:  numbers always comes between 0 and 1 i.e 1.1694966799377107 and 9.1694966799377107