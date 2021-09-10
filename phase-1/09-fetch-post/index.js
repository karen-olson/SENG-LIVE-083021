// Warmup: What are the four most popularly used HTTP Verbs and the actions associated with them?

// GET: retrieve resources
// POST: create a new resource
// PUT/PATCH: update an existing resource
// DELETE: zap the resource, the internet never forgets 
const BASE_URL = "http://localhost:3000/pokemons"

// making a fetch request
// fetch is asynchronous 
// fetch(BASE_URL) // produces a promise 
// // What is a promise? IOU 
// .then(resp => resp.json()) // why a .then???
// .then(pokemonsArray => {
//   // do something with teh pokemonsArray
// })

const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

function renderPokemon(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLikes(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokeCard));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}

function createPokemon(event) {
  event.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = event.target.querySelector("#img-input").value;

  const pokemon = { //plain old javascript object
    name: name,
    img: img,
    likes: 0,
  };

  const configObj = {
    method: "POST", //;overwriting the default get request made by fetch
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon)
  }

  // the url we are sending the data to
  // pessimistic rendering
  fetch(BASE_URL, configObj)
  .then(function(resp){
    return resp.json()
  })
  .then(function(pokemon){
    renderPokemon(pokemon);
  })
  pokeForm.reset();
}

function increaseLikes(pokemon, likesNum) {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;
}

function deletePoke(card) {
  card.remove();
}

function getPokemons() {
  fetch(BASE_URL) // returns a promise
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemonsArray) {
      pokemonsArray.forEach(function (pokemon) {
        renderPokemon(pokemon);
      });
    });
}

function submitFunction(e){
  // what to do here???
  e.preventDefault()


  // make a request to server 
}

function init() {
  getPokemons();
  pokeForm.addEventListener("submit", createPokemon);
  const commentForm = document.querySelector('#comment-form')
  console.log(commentForm)
  commentForm.addEventListener('submit', submitFunction)
}

init();


// add event listener of a submit type to the comments form 
// how?
// where?