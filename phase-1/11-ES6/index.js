const BASE_URL = "http://localhost:3000/pokemons";
const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

const respToJson = (resp) => resp.json();

const renderPokemon = (pokemon) => {
  // console.log(pokemon)
  // debugger;
  const { name, id, likes, img } = pokemon;
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = img;
  pokeImg.alt = `${name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLikes(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokemon, pokeCard));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
};

const createPokemon = (event) => {
  event.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = event.target.querySelector("#img-input").value;

  const pokemon = {
    name: name,
    img: img,
    likes: 0,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  };

  renderPokemon(pokemon);
  fetch(BASE_URL, configObj);

  pokeForm.reset();
};

const increaseLikes = (pokemon, likesNum) => {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;
  fetch(`${BASE_URL}/${pokemon.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: pokemon.likes }), // pass in the properties that are being updated
  });
};

const deletePoke = (pokemon, card) => {
  card.remove();
  fetch(`${BASE_URL}/${pokemon.id}`, {
    method: "DELETE",
  });
};

const getPokemons = () => {
  fetch(BASE_URL)
    .then(respToJson)
    .then(function (pokemonsArray) {
      pokemonsArray.forEach(function (pokemon) {
        renderPokemon(pokemon);
      });
    });
};

const init = () => {
  getPokemons();
  pokeForm.addEventListener("submit", createPokemon);
};

init();

const submitFunction = (e) => e.preventDefault();

// function submitFunction(e) {
//   e.preventDefault();
// }

// Destructuring arrays

// let student1 = students[0]
// let student2 = students[1]
// let student3 = students[2]
// let student4 = students[3]

// let [student1, , student3, student4] = students

// NEED TO keep the order of our variables aligned with their values

// Destructuring objects
// order doesnt matter
// IMPORTANT: the variable names should match the property name

// const pokemon = {
//   name: "Squirtle",
//   img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
//   likes: 0,
//   id: 7
// }

// const {likes, id, name, image} = pokemon

// Spread operator
// can be used with arrays and objects
// creates a shallow copy of the data structure

// pass by reference vs pass by value

// pass by value: primitive types
// pass by reference: passing the pointer to data

let students = ["hathor", "jon", "abby", "sowande"];
// students.push("paul") // destructively

let newStudents = [...students, "paul"];
let newerStudents = ["kevin", ...newStudents];

let newArr = students;
newArr.push("Devin");

// spreading objects

const initialState = {
  loggedIn: false,
  pokemon: [],
};

// creating a copy of initial state into a new object
let state = { ...initialState };

// reassigning state to a NEW object again, including the pokemon array
state = {
  ...state,
  pokemon: ["pikachu", "squirtle"],
};


// reassigning state AGAIN to a new object, including loading property
state = {
  ...state,
  loading: true,
};
