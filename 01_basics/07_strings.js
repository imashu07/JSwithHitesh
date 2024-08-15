const name = "Hitesh"
const repoCount = 50

// This method is not recommended
//console.log(name + repoCount + "Value")

//console.log(`Hello my name is ${name} and I have ${repoCount} in my GitHub account`)

//declaring a string
// new -> Objects of js. String ('constructor')
const gameName = new String('hiteshhc')
// console.log(gameName) //[String: 'hiteshhc']
// console.log(gameName[0]) //h
// console.log(gameName.__proto__) //{}

// console.log(gameName.length) //8
// console.log(gameName.toUpperCase()) //HITESHHC ---> When you miss to put () you get [Function: toUpperCase]
// console.log(gameName.toLowerCase()) //hiteshhc
// console.log(gameName.charAt(3)) //Character at the given number
// console.log(gameName.indexOf('t')) //Character at which number

//subString = We can give negative values too but it won't obey.
// const subDividingString = gameName.substring(0,4)
// console.log(subDividingString) //0 to 3 is printed 4th character is not printed. It works like start value and then to how many charachters I should move that is 4.

// // slice = We can give negative values here. Value will start from reverse. 
// const slicingString = gameName.slice(-8, 4)
// console.log(slicingString) 

const newStringOne = "    hitesh     " //spaces
console.log(newStringOne) //with space
console.log(newStringOne.trim()) //It emoves the spacing from the start and the end
// Check MDN for more information

const url = "https://hitesh.com/hitesh%20choudhary"

//When we want to replace the %20 from the string
console.log(url.replace('%20', '-'))
// If any key-word is present in the url
console.log(url.includes('hitesh'))

//Converting the string to array
const stringToArrayConversion = new String("Hitesh-Choundhary.com")
console.log(stringToArrayConversion.split('-'))
// Check MDN for more information