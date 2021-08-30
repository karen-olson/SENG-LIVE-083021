// console.log()
// debugger
// console.log('Hi this is day 1')

// Data types

// strings

// 'Welcome to phase 1'
// "Welcome to phase 1"
// `Welcome to phase 1` // string interpolation: calling on variables inside of a string

// booleans truthy or falsey values

// examples of falsey values
// 0
// null
// undefined
// ""
// false
// NaN

// everything else is truthy

// numbers

// integers: 3
// floats: 3.14
// NaN:

// bigint

// object
// objects have properties

// undefined
// no return value
// no value at all

// null
// nothing

// symbol :symbol

// typeof operator

// console.log(typeof 3.15)
// console.log(typeof undefined)
// console.log(typeof Symbol("name"))

// const cat = "timmy"
// const cat = "king"

// primitive vs non primitive

// what is a primitive data type?
// a data type that can only store a single piece of data

// non primitive data type? contain multiple values
// objects
// array

// Variables

// what are variables and why are they useful?
// let assign values to a space in memory
// assign data to a placeholder
// containers for data
// named storages for data
// store data to refer back to

// let vs const

// legacy code: var

// let
// can be declared without initialization
// let value can be reassigned

// let cat;

// let likes = 0
// console.log(likes)
// likes = likes += 1
// console.log(likes)

// let likes = 1

// const
// cannot be reassigned

// const likes = 0

// variable naming is arbitrary
// identifier must always represent the data that is being contained
// should not with numbers
// camelCase for two worded variables
// reserved keys can not be used
// start with capital words
// should not contain any spaces

// errors

// console.log(pokemon)

// let test pokemon = "Jigglypuff"

// everything we have defined so far, lives in the global scope

// Conditional statements
// provide control flow
// we can perform certain actions based on a condition

let pokemon = "Voltorb";
let likes = 3;

if (likes === 1) {
  console.log(`${pokemon} has 1 like`);
} else {
  console.log(`${pokemon} has ${likes} likes`);
}

// // ternary operators

// likes === 0 ? likes += 1 : ++likes

// exercise solution

const userName = "";
const password = "";

let msg;

// if (userName === "igglypuff" && password === "jigglypuff") {
//   msg = `${userName} is now logged in`
// }

// if (userName && password) {
//   msg = `${userName} is now logged in`
// } else {
//   msg = "Please fill out the required fields"
// }

// if (userName === "" && password === ""){
//   msg = "Please fill out the required fields"
// } else {
//   msg = `${userName} is now logged in`
// }

// if (!userName && !password) {
//   msg = "Please fill out the required fields";
// } else {
//   msg = `${userName} is now logged in`;
// }

// const userName = "";
// const password = "";

// let msg;

// if (userName === "igglypuff" && password === "jigglypuff") {
//   msg = `${userName} is now logged in`
// }

// if (userName && password) {
//   msg = `${userName} is now logged in`
// } else {
//   msg = "Please fill out the required fields"
// }

// if (userName === "" && password === ""){
//   msg = "Please fill out the required fields"
// } else {
//   msg = `${userName} is now logged in`
// }

// if (!userName && !password) {
//   msg = "Please fill out the required fields";
// } else {
//   msg = `${userName} is now logged in`;
// }

// console.log(msg);
