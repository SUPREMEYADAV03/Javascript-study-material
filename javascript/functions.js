function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("p");
    console.log("r");
    console.log("e");
    console.log("m");
    console.log("e");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("result :",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("supreme"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username : "supreme",
    prices : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.prices}`);
}

// handleObject(user)

handleObject({
    username : "sam",
    prices : 399
})

const myNewArray = [200, 399, 544,777]

function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 399, 544,777]));