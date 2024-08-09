console.log("var, let, const\n")
const accountId = 11901073
var accountEmail = "ashutosh.11901073@tempo.com"
let accountPassword = "Temporary@123"
demoVaribale = "Demo Variable"
let valuelessVariable

console.log(accountId, accountEmail, accountPassword)
console.table([accountId, accountEmail, accountPassword, demoVaribale, valuelessVariable])

/*
var => It is no longer recommended to use because of its issue with block and functional scope.
let => It is currently in use because it has block and functional scope.
When only a variable is defined without any values, JS considers the value as undefined.
*/