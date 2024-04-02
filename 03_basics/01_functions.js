function sayMyname() {   //this syntax for functions 
    console.log("A");
    console.log("Z");
    console.log("L");
    console.log("A");
    console.log("A");
    console.log("N");
}

//sayMyname()   //"sayMyName" is called refrence and "()" is used for execution


// function addTwoNumbers(number1,number2){    //the value which is inside of the "()" is called "parameters" i.e (number1,number2)
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

//addTwoNumbers(3, 4)  //the value which is inside of the "()" is called "argument" i.e (3, 4)

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMassage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
    //OUTPUT:Azlaan just logged in
    // console.log(loginUserMassage("Azlaan"));
    // console.log(loginUserMassage("Azlaan")); //if thier is not value in call function then its value is undefined not NULL

    
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Azlaan",
    price: "999"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: "399"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));