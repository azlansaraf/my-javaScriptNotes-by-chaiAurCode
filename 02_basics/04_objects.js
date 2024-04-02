// const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Azlaan",
            lastName: "Saraf"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //assign mean merge the objects/combined the object.IMP always use "{}" this will help if you have many array's. before does not effct but its safe to use it for further. OUTPUT:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2} //use this function as its is easy and latest it is called spread function
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gamil.com"
    },
    {
        id: 1,
        email: "a@gamil.com"
    },
    {
        id: 1,
        email: "a@gamil.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //OUTPUT:{ id: '123abc', name: 'sam', isLoggedIn: 'false' }       [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  //OUTPUT: { id: '123abc', name: 'sam', isLoggedIn: 'false' }   [ '123abc', 'sam', 'false' ]
// console.log(Object.entries(tinderUser)); //OUTPUT: { id: '123abc', name: 'sam', isLoggedIn: 'false' }      [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', 'false' ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {   //this empty object called JASON.In JASON Values in also strings and keys are also in strings
//     "name": "Azlaan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

