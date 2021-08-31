# Functions

### SWBAT:

- Explain why functions are important in JS
- Understand the difference between declaring and invoking a function
- Understand what a first-class function is and why that matters in JS
- Create and use callback functions
- Understand function scope vs global scope

```txt
05 min - Warm Up
05 min - Review Warm up
30 min - Segment 1: Functions & scope
10 min - Break
10 min - First class functions
10 min - Closures
20 min - Callback Functions
15 min - Knowledge check exercise
05 min - Questions
05 min - Exit Ticket
---
120 min
```

### Warm up - (5 min)

Warm up question:

What are functions and why do we use them?

```
Allow the creation of reusable code
Separation of responsibilities
Building blocks of JS programming
Allows us to structure larger programs
```

### Segment 1: functions & scope

#### Declaring a function

Using function keyword/function declaration - point out that this creates a global scope

This is where we can familiarize students with creating a function that runs upon page loading

Create a function called `init` that will console.log('web page loaded')

```
function init(){
    console.log("page has loaded, run your program")
}

```
Invoke function in console to demonstrate how to test functions
Change the console.log to a `return` statement

```
Store in a variable and console.log variable
console.log function invokation
Invoke function in console
```

Go over function declarations being accessible in global scope

Write a function called `createPokemon` using function expression

```
const createPokemon = function(){
    let pokemon = prompt('Which pokemon are you today?')
    return pokemon
}

console.log(createPokemon)
```

Call the function without invokation to identify what exactly is being returned. Discuss what it means to invoke a function vs returning a function reference

Discuss anonymous functions and the restrictions of scope with these the previous and next examples by placing a console.log before the function declaration and before the function expression

Go over arrow functions

```
const renderPokemon = () => {
console.log('Rendering Pikachu!')
}
```

Talk about the side effects of the above code and how its hard coded and we want to write code that is reusable. So we can use parameters to pass in values as arguments that will be used in the functions program.
This helps our functions be more dynamic and reusable.

Pass a parameter to renderPokemon and use interpolation to dynamically log the different characters.

This is one of the most confusing concepts for students, so spend some time here ensuring to emphasize the difference between a parameter and argument

```
function renderPokemon(pokemon){
console.log(`Rendering ${pokemon}`)
}
```

#### First class functions

What does it mean when we talk about first class functions?

It means that functions can be treated like any other object: they can be assigned to a variable, passed as values to other functions, returned as the value from another function

#### What is a closure and why is it useful

A closure can be thought of as the function that is assigned (or returned as a value) and its associated scope.

```
const createPokemon = function(){
    let pokemon = prompt('Which pokemon are you today?')
    return function printPokemon(){
        console.log(`Today's popular pokemon is: ${pokemon}`)
    }
}
```

#### Callback functions

Functions that are passed in as an argument to another function are called callback functions

```
const printPokemon = (name) => {
    console.log(`Today's popular pokemon is: ${name}`)
}

const capitalizePokemon = (name) => {
    console.log(`${name.toUpperCase()}`)
}

const createPokemon = (callback) => {
    let pokemon = prompt('Which pokemon are you today?')
    callback(pokemon)
}

createPokemon(capitalizePokemon)
createPokemon(printPokemon)
```
