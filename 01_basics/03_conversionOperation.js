// It prints the type as number.
let score1 = 33
console.log(`The value of score1 is ${score1}`)
console.log(typeof score1)
console.log(typeof(score1))

//It prints the type as string
let score2 = "33"
console.log(`The value of score2 is ${score2}`)
console.log(typeof(score2))

//It prints the type as string
let score3 = "33abc"
console.log(`The value of score3 is ${score3}`)
console.log(typeof(score3))

//To put convert a given type to number we use "Number" as the type.
let convertScore2 =  Number (score2)
console.log(`The value of converted score2 is ${convertScore2}`)
console.log(typeof(convertScore2))

//Upon trying to convert score3 it prints the type as number but it's value is printed as NaN (not a number)
let convertScore3 =  Number (score3)
console.log(`The value of converted score3 is ${convertScore3}`)
console.log(typeof(convertScore3))

// taking the value as null
let score4 = null
console.log(`The value of score4 is ${score4}`)
let convertScore4 =  Number (score4)
console.log(`The value of converted score4 is ${convertScore4}`)
console.log(typeof(convertScore4))

// taking the value as undefined
let score5 = undefined
console.log(`The value of score5 is ${score5}`)
let convertScore5 =  Number (score5)
console.log(`The value of converted score5 is ${convertScore5}`)
console.log(typeof(convertScore5))

// taking the value as boolean
let score6 = true 
console.log(`The value of score6 is ${score6}`) 
let convertScore6 =  Number (score6)
console.log(`The value of converted score6 is ${convertScore6}`) //true = 1 & false = 0
console.log(typeof(convertScore6))

// taking the value as string
let score7 = "HelloWorld"
console.log(`The value of score7 is ${score7}`)
let convertScore7 =  Number (score7)
console.log(`The value of converted score7 is ${convertScore7}`)
console.log(typeof(convertScore7))

//Investigating about the boolean type
// 1 & any other number => true & 0 => false
let isLoggedIn1 = 1
console.log(`The current boolean value is ${isLoggedIn1}`)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(`The current converted boolean value is ${booleanIsLoggedIn1}`)

// Empty space => False
let isLoggedIn2 = ""
console.log(`The current boolean value is ${isLoggedIn2}`)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(`The current converted boolean value is ${booleanIsLoggedIn2}`)

// Any string => True
let isLoggedIn3 = "HelloWorld"
console.log(`The current boolean value is ${isLoggedIn3}`)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(`The current converted boolean value is ${booleanIsLoggedIn3}`)