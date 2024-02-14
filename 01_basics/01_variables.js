const accountId = 133553
let accountEmail = "sarafazlan@gmail.com"
var accountPassword = "12345678"
accountCity = "Belgavi"
let accountState

// accountId = 2  // not allowed

accountEmail = "agla@gaga.com"
accountPassword = "123124135"
accountCity = "Dubauio"


/*
Prefer not to use var
because of issue in block scope ("[]") and functional scope
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);