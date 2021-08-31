// What are functions and why do we use them?
// instructions to perform a task 
// resuable code 
// include parameters 
// building blocks of javascript 
// allows us to structure larger programs

// What does a function look like 

// function declaration 


// execute any JS designated for the page load
// console.log(init())

function init(){
    // perform a task/ write some logic
    console.log("page has loaded, run the program")
    return "this is a return value"
}

const testingFunction = init()
console.log(testingFunction)

function expressions
const createPokemon = function(){
    // anonymous function
    let pokemon = prompt('Which pokemon are you today?')
    return pokemon
}

console.log(createPokemon())

// arrow function 

const renderPokemon = () => {
    // 
}

// parameters vs arguments 

// parameters are placeholders/variables for a value that is going to be passed to a function
// parameters are used upon function declaration 
// variables

function renderPokemon(character){
    // inside here use character
    console.log(`Rendering ${character}`)
}

// arguments are the values that are passed in when a function is being invoked 

renderPokemon("pikachu")
renderPokemon("bulbasaur")
renderPokemon("jigglypuff")

// reference vs invokation 

// First class functions 
// assign a function to a variable 
// passed functions as an argument to other functions *** callback function
// use functions as a return value for another function *** the function returning a function is referred to as a high order function


function sayName(name){
    return `Hi, I'm ${name}`
}

function callbackFun(){
    return "i am callback function"
}

// accept a function as an argument
// callback function
function greeting(callback){
    return callback("aysan")
}

// Closures 

// scopes: global/ local scopes

let pokemon = "pikachu" // global scoped variable

function renderPokemon(character){
    // inside here use character
    let pokemon = character // locally scoped variable
    console.log(pokemon)
    console.log(`Rendering ${character}`)
}
console.log(pokemon)

// closures 

function createPokemon(){
    let pokemon = "pikachu"
    console.log(student)
    return function printPokemon(){
        let student = "Matt"
        console.log(`The pokemon is ${pokemon}`)
    }
}


// exercise solution

function add(sample1, sample2) {
    return sample1 + sample2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function sub(sample1, sample2) {
    return sample1 - sample2;
  }
  
  function compute(calculate) {
    // invoke calculate with arguments 6, 3
    return calculate(6, 3);
  }
  
  console.log(compute(add));
  console.log(compute(multiply));
  console.log(compute(sub));
  