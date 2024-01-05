// javascript and classes
// OOP
// Object 
// -collection of properties and methods
// - toLowerCase

// why use OOP

// parts of OOP

// Object literal

// - constructor function
// - prototypes
// - classes
// - instanceof(new, this)

// 4 pillars of OOP
// Abstraction
// Encapsulation 
// Inheritance 
// Polymorphism 

const user = {
    username : "hitesh",
    loginCount : 8,
    singnedIn : true,
    getUserDetails : function(){
        console.log("got the user details from databases");
        console.log(`username :${this.username}`);
        console.log(this);
    }
    
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);

// instanceof learn yourself