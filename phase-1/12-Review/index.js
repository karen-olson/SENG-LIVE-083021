const BASE_URL = "http://localhost:3000/items";
// Select and save the items container element
const itemsContainer = document.querySelector("#items-container")

// Select and save the items form element
const itemsForm = document.querySelector('#items-form')

// Test your code. What is the return value and why?
// console.log(itemsContainer)
// console.log(itemsForm)

// Add an event listener to form calling the event handler, createItem
itemsForm.addEventListener('submit', createItem)

function createItem() {
  event.preventDefault()
  // This event handler should create a new Items object and persist data
  const name = document.querySelector('#items-input').value
  const quantity = document.querySelector('#quantity-input').value

  // event.target['items-input'].value
  // +event.target["quantity-input"].value

  // Create an items object
  const newObj = {
    name: name, 
    quantity: quantity,
    completed: false
  }

  // Persist this data

  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObj)
  })
  .then(resp => resp.json())
  .then(item => renderItem(item))
  // .then(renderItem) // refactored line 41
  
  itemsForm.reset()
}

// Review this code, can you identify anything that is missing? Test your theories!

// responsible for generating hte html for each item and appending to the DOM
function renderItem(item) {

  // creating a checkbox for each item 
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  
  // checking status of items completed property. and if true, keeping the checkbox marked
  if (item.completed) {
    checkBox.checked = true;
  }

  // Fix this code to pass the item object to the event handler
  checkBox.addEventListener("click", function(){
    return updateCompleted(item)
  });

  // Remember that element id's should be unique
  const listItem = document.createElement("li");
  listItem.id = `items`;
  listItem.textContent = `Name: ${item.name} - Quantity: ${item.quantity} - Bought: `;

  const deleteBttn = document.createElement("button");
  deleteBttn.textContent = "X";

  deleteBttn.addEventListener('click', () => deleteItem(listItem, item.id))

  listItem.append(checkBox, deleteBttn);
  itemsContainer.appendChild(listItem)
  // Test this method by calling in getItems method to render items to DOM
}

function updateCompleted(item) {
  // console.log(item)
  // This logic will use the ! operator to toggle the status of the property, completed. If it returns false, it will update to true and vice versa.
  let completed = (item.completed = !item.completed);
  console.log(completed)
  // if item.completed === true 
  // then assign item.completed = false
  // if item.completed === false
  // then assign item.completed = true

  // Make a fetch request to update data on server upon checkbox click
 
  fetch(BASE_URL + `/${item.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed: completed })
  })
}

// responsible for getting all the resources 
function getItems() {
  // Need to make a fetch request for all items from server
  fetch(BASE_URL)
  .then(resp => resp.json())
  .then(items => items.forEach(renderItem))
}

function deleteItem(listItem, itemId){
  // console.log(listItem)
  // console.log(itemId)
  listItem.remove()
  fetch(BASE_URL + `/${itemId}`, {
    method: 'DELETE'
  })
}

getItems()
