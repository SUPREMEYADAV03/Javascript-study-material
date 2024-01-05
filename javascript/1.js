const accountId = 144553
let accountEmail = "supreme@gmail.com"
var accountPassword = "12345"
accounCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "nitin@gmail.com"
accountPassword = "67890"
accounCity = "thane"

console.table([accountId,accountPassword,accountEmail,accounCity,accountState])

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/