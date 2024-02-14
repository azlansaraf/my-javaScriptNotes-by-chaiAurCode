// Primitive {
//   7 types : String, Number, Boolean, null(empty not zero), undefine(undeclared varaible), symbol, bigInt(big scienticfic values)
// }

const score = 100 //number 
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outSideTemp = null //null
let userEmail; //undefined

const id = Symbol('123') //symbol "symbols depends upon id's not value"
const anotherId = Symbol('123') //symbol "symbols depends upon id's not value"
console.log(id === anotherId); //False

const bigNumber = 124135246357235n //bigInt (use "N" at the end)



// Reference (non primitive) {
//  Array, Objects, Functions
// }

const heros = ["ironMan", "superMan", "spiderMan"] //Array

let myObj = {     //This Is An Object
    name: "Azlaan",
    age: 19,
}

const myFunction = function(){    //("function(){}") this is called function
    console.log("Hello World");
}

console.log(typeof scoreValue );  // we can use "typeOf" to identify dataTypes of given varaibles 


/* IMP Document for learning
// https://262.ecma-international.org/5.1/#sec-11.4.3
*/

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
 //stack(primitive), heap(non-primitive)
 stack(primitive) we got a copy of varaible we have declared
 heap(non-primitive) we get reffrence of original value of object etc.....
 */



/*
//stack(primitive),
 let myYoutubeName = "Azlaan"

 let anotherName = myYoutubeName
anotherName = "saraf"


 console.log(myYoutubeName); //Azlaan
 console.log(anotherName); // saraf
*/

 
/* 
 // heap(non-primitive)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
 
let userTwo = userOne

 userTwo.email = "azlaan@google.com"

 console.log(userOne.email); //azlaan@google.com
 console.log(userTwo.email); //azlaan@google.com
 */