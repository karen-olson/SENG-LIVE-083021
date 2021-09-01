// What are arrays? 
// ordered list that can contain multiple values
// each item in an array is referred to as an element
// collection of related data 

// What does an array look like? How to create an array, how do we use arrays 

// array literal 
// reader friendly 
// const pokemons = ['pikachu', 'bulbasour', 'jigglypuff'] // 0, 1, 2

// access elemens in an array 
// every element has an associated 

// console.log(pokemons[1])

// issues with accessing elements through index?
// elements can change inside of an array 
// we can access index that doesnt exist 

// pokemons[2] = "Jigglypuff"

// console.log(pokemons)

const pokemons = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
  ];

pokemons[pokemons.length - 1]
// pokemons[19]

// add, remove elements in an array 

// adding elements 

// .push add element to the end of an array, returns the length of the new array. destructive 

pokemons.push("Spearow")

// unshift add element to the beginning of an array. return value is the length of the array. Destructive

pokemons.unshift("Arbok")

// spread operator. Creates a copy of the original array, non destructive 

let newPokemons = [...pokemons, "Pikachu"]

// console.log(pokemons === newPokemons)


// removing elements 

// .pop will remove and return the last item of an array. destructive

let lastElement = pokemons.pop()
// console.log(lastElement)

// .shift removes the first element, returns it. destructive  

let firstElement = pokemons.shift()
// console.log(firstElement)

// .slice non destructive return a portion of the array, or a complete copy 

let copyPokemons = pokemons.slice()
// console.log(copyPokemons)

// Pass by value vs Pass by reference 
// primitive types are pass by values
// Non primitives are pass by reference

// pass by value: retains original value but will pass the value on 
let x = 2

function square(num){
    return num = num * num 
}

let result = square(x)
// console.log(result)
// console.log(x)


// pass by reference: any changes made to a reference of the data will be reflected in the original state

// const copyOfPokemons = pokemons
// copyOfPokemons.pop()
// console.log(copyOfPokemons)
// console.log(pokemons)
// console.log(copyOfPokemons === pokemons)


const copyOfPokemons = [...pokemons]
copyOfPokemons.pop()
// console.log(copyOfPokemons)
// console.log(pokemons)
// console.log(copyOfPokemons === pokemons)

// looping 

// .forEach() step inside the array, and deal with each element individually as it loops through the array 

// what is a callback function
// reference to another function 
// a function being passed as an argument

// use this if you're not changing anything about the elements 
// i.e passing each element to another function

let newArr = []
pokemons.forEach(function(character){
    newArr.push(character.toLowerCase())
})
console.log(newArr)

// arrow function syntax
// pokemons.forEach((character) => {
//     console.log(character)
// })

// .map 

let newPokemon = pokemons.map(function(character){
    return character.toLowerCase()
})


console.log(pokemons === newPokemons)