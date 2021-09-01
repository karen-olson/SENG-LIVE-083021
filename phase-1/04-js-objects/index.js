// What is an object
// collection of data nested inside of {}

// create an object

// literal way of creating an object
const pikachu = {
  // key/value pairs. Keys are properties
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
};

// accessing property values is done through bracket or dot notation

console.log(pikachu['img']) // bracket notation

console.log(pikachu.img)

// when to use bracket vs dot notation 

// dot notations is literal 
// can not be used with variables

// bracket notation is more flexible
// we can use variables with bracket notation


function printName(object, property){ 
    return object[property]
    // pikachu['name']
}

printName(pikachu, 'img')


Changing property values 

const pikachu = {
    // key/value pairs. Keys are properties
    name: "Pikachu",
    img: "www.img.com",
    likes: 0,
  };

pikachu['img'] = "www.google.com"
pikachu.img = "www.image.com"

// adding new properties 

pikachu['color'] = "yellow"
pikachu.powers = "thunderbolt"

// removing properties 

delete pikachu.powers

// Best practice for modifying objects

// spread operator 

let newPikachu = {...pikachu, powers: "thunderbolt"}

// Object.assign() 

let copyOfPikachu = Object.assign({}, pikachu)


console.log(Object.entries(copyOfPikachu).flat())


// looping through object 

// for...in 

function objLoops(obj){

    // let k = 'name' first loop
    // let k = 'img' second loop
    // let k = 'likes' third loop


    // for (creating a variable for each key in the object)

    for (const k in obj){  // creating a variable 'k' for each key in the object being passed into this function
        console.log(obj[k]) // pikachu['img']
    }
}

objLoops(pikachu) // obj = pikachu


const pikachu = {
    name: "Pikachu",
    img: "www.img.com",
    likes: 0,
    abilities: [
      {
          name: "static",
      },
      {
          name: "lightning-rod",
      },
    ],
  };

  console.log(pikachu['abilities'][0]['name'])


  pikachu['abilities'].forEach(function(obj){
      for (const k in obj){
          console.log(obj[k])
      }
  })