// What is fetch?
// simpler, easy to use method for consuming asyncronously from a 3rd api
// allows us push and pull data from a server
// asynchronous 
// its just a method, ran on the window which means it doesnt need to be called on anything 

// how to use fetch
// fetch(endpoint, [options]***) //promises 
// .then() // do something with the promise // return another promise
// .then() // do something with the received data 

// Fetch by default is going to make a get request

// Promise - IOU from the server, an object
// has 3 different statuses: pending, fulfilled, rejected

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

  const pokemon = {
    name: name,
    img: img,
    likes: 0,
    id: 6, // NEEDS TO CHANGE
  };
  renderPokemon(pokemon);
  pokeForm.reset();
}

function increaseLikes(pokemon, likesNum) {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;
}

function deletePoke(card) {
  card.remove();
}

// R in CRUD: Retrieving resources 
function getPokemons(){
  // making a get request 
  fetch('http://localhost:3000/pokemons') // returns a promise
  // take the promise, and turn into json
  .then(function(response){
    return response.json() // turning into json so that its easier to access values
  }) // return another promise
  .then(function(pokemonsArray){
    // do something with pokemonsArray
    // specific to your application design
    pokemonsArray.forEach(function(pokemon){
      renderPokemon(pokemon)
    })
  })
}

function init() {
  getPokemons()
  pokeForm.addEventListener("submit", createPokemon);
}

init();


// Exercise Solution

const inputBttn = document.querySelector('input[type="submit"]');
inputBttn.addEventListener("click", function (e) {
  // need to grab the value of the form
  const query = document.querySelector('input[type="text"]').value;
  fetch(`${BASE_URL}${query}`)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
});
