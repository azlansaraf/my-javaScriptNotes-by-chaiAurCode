console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1); //Equal to
console.log(2 === 1); //strickly equals to
console.log(2 != 1); // not equals to

console.log("2" > 1); //true if both dataTypes are same 
console.log("02" > 1); //true if both dataTypes are same 

console.log(null > 0);  //False
console.log(null == 0); //False
console.log(null >= 0); //True 
/* the reason is that an equality check == and comparisons >, <, >=,<= work differently.
Comparisons convert null to number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/

console.log(undefined == 0); //false
console.log(undefined < 0);  //false
console.log(undefined > 0);  //false

// === (Strick Check mean checks value strickly and also its dataType)

console.log("2" == 2);
console.log("2" === 2);