const user = {
    username : "supreme",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "supreme"
//     console.log(this.username);
// }

const chai = () =>{
    let username = "supreme"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "supreme"})

// console.log(addTwo(3,5))

// const myArray = [2,3,5,4,6]

// myArray.forEach()