"use strict"; //treat all the code as newer version. Without writing this as well the compiler takes the code as use strict
//alert (3+3) ---> This won't return an output here at present because we are not using a browser but we are using node.js

/*
Available data types in JS

Primitive Datatypes
number > For all numeric values (2^53)
string -> for all strings ("")
bigint -> Not in use but can be used for large integers
boolean -> True/False
null -> Standalone value
undefined -> Value is not defined (when we just create a variable and don't assign any values to it)
symbol -> To identify uniqueness

OBJECT

*/

//Interview question what is the difference between them? Why both are included under primitive datatypes
// They both are categorized under prii=mitive datatypes but they offer different results. As it's sometimes considered a flaw in JS while some say it is the correct way. So commenting on it tough

console.log(typeof(null)) // OBJECT
console.log(typeof(undefined)) // Undefined