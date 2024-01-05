// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "supreme",
    "full name" : "supreme yadav",
    [mySym] : "mykey1",
    age : 20 ,
    location : "Jaipur",
    email : "supreme@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);

JsUser.email = "hitesh@chatgpt.com"
 // Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo);

// console.log(JsUser);


// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularUser = {
    email : "some@gmil.com",
    fullname : {
        userfullname : {
            firstname : "supreme",
            lastname : "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

const obj4 = {obj1,obj2}
//console.log(obj4);
const obj5 = Object.assign({},obj1,obj2,obj3)
//console.log(obj4);
const obj6 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id : 1,
        email : "sup@gmail.com"
    },
    {
        id : 1,
        email : "sup@gmail.com"
    },
    {
        id : 1,
        email : "sup@gmail.com"
    }
]
users[1].email
//console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));
const course = {
    coursename : "js in hindi",
    price : "555",
    cousreInstructor : "supreme"
}

const {coursename } = course
const {coursename : courses } = course

console.log(coursename);
console.log(courses);

//JSON
// {
//     "name" : "supreme",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]
