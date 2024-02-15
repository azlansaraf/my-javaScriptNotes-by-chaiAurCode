// Dates

let myDate = new Date ()
console.log(myDate.toString()); //result: Wed Feb 14 2024 17:41:48 GMT-0800 (GMT-08:00)
console.log(myDate.toDateString()); //result: Wed Feb 14 2024
console.log(myDate.toJSON());   //result: 2024-02-15T01:41:48.170Z
console.log(myDate.toISOString());  //result: 2024-02-15T01:42:43.942Z
console.log(myDate.toLocaleDateString());   //result: 14/2/2024
console.log(myDate.toLocaleString());   //result: 14/2/2024, 5:42:43 pm
console.log(myDate.toLocaleTimeString());   //result: 5:42:43 pm
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); //result: Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString()); //result: 23/1/2023, 5:03:00 am

// let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString()); //result: 13/1/2023, 4:00:00 pm

// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()); //result: 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
       