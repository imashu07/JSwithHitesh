// console.log(12 > 10)
// console.log(12 < 10)
// console.log(12 >= 10)
// console.log(12 <= 10)
// console.log(12 == 10)
// console.log(12 != 10)
// console.log(12 === 10)

//Comparining two different items of different data type

console.log("2" > 1) // JS converts "2" to number type
console.log("02" > 1) // JS converts "02" to number type

// TS doesn't allow comparision of 2 different data types

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// The reason is that an equility check == and comparision > < >= <= work differently.
// Compaisions convert null to a number, treating it as 0. Thus null >= 0 is true while null > 0 is false.

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// === strict check --- Checks based on data type
console.log("2" === 2)
