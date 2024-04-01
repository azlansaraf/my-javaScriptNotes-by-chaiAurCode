// singleton // only one object 
// Object.create this method is called constructor //hence this is singleton

/*********************************************************************************/
//oject literals

const mySym = Symbol("key1")//note symbols can only be declar when its in "[]" if not its identifies as string.


const JsUser = {
    name: "Azlaan", //remember value is always recorgines as a string 
    "full name": "Azlaan Saraf", //this will not run with "." function you have to use "[]"function reason is the value is in pure string
    age: "18",
    location: "belgaum",
    [mySym]: "mykey1", //note symbols can only be declar when its in "[]" if not its identifies as string.
    email: "azlaan@google.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)// prints normal string value:key
// console.log(JsUser["email"])
// console.log(JsUser["full name"])// prints pure string value:key
// console.log(JsUser[mySym])//note symbols can only be declar when its in "[]" if not its identifies as string.

JsUser.email = "azlaan@gamil.com" //we can overwrite values in objects using "="
//console.log(JsUser);
// Object.freeze(JsUser)//to lock the object from overwriting
JsUser.email = "azlaan@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("hello JS user");
}

JsUser.greetingsTwo = function(){
    console.log(`hello JS user, ${this.name}`);//output=hello JS user, Azlaan
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());//output=hello JS user, Azlaan
