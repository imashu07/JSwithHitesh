/*
Memory Types

Stack Memory
=> All primitive datatypes.
=> Variables copy is made available.
=> It always gives a copy of its original value. So when changes are made to the copy they don't affect the original value.

Heap Memory
=> All non-primitive datatypes
=> Variables reference is made available
=> It always gives a refernece to the original value. So when changes are made to the copy they apply the changes to the orginial.

*/

//stack

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename) //hiteshchoudharydotcom
console.log(anothername) //chaiaurcode

//heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email) //hitesh@google.com
console.log(userTwo.email) //hitesh@google.com